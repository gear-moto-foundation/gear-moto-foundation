// Cloudflare Pages Function: POST /api/contact
// Requires RESEND_API_KEY and CONTACT_FROM_EMAIL set in Cloudflare Pages environment settings.
// Verify the sender domain with Resend before enabling delivery.
const LIMITS = {name:120,email:254,phone:40,topic:80,message:4000};
const topics=new Set(['General inquiry','Corporate sponsorship','Community partnership','Events','Volunteering','Gear and education','Gear inquiry','Education inquiry','Recovery inquiry','Program information','Assistance inquiry','Media','Shop inquiry','Giving inquiry']);
const clean=(value,max)=>String(value??'').trim().slice(0,max+1);
const respond=(data,status=200)=>new Response(JSON.stringify(data),{status,headers:{'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store'}});
const escapeHtml=(value)=>String(value).replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
export async function onRequestPost({request,env}) {
  const origin=request.headers.get('Origin');
  const own=new URL(request.url).origin;
  if(origin && origin!==own) return respond({error:'Invalid form origin.'},403);
  const size=Number(request.headers.get('Content-Length')||0);
  if(size>12000) return respond({error:'Message exceeds the permitted size.'},413);
  let data;
  try {data=await request.formData();}catch{return respond({error:'Invalid form submission.'},400);}
  if(clean(data.get('website'),100)) return respond({ok:true});
  const values={name:clean(data.get('name'),LIMITS.name),email:clean(data.get('email'),LIMITS.email),phone:clean(data.get('phone'),LIMITS.phone),topic:clean(data.get('topic'),LIMITS.topic),message:clean(data.get('message'),LIMITS.message)};
  if(!values.name||values.name.length>LIMITS.name||values.email.length>LIMITS.email||!/^\S+@\S+\.\S+$/.test(values.email)||values.phone.length>LIMITS.phone||!topics.has(values.topic)||values.message.length<10||values.message.length>LIMITS.message){
    return respond({error:'Please complete all required fields with valid information.'},400);
  }
  const destination=values.topic==='Volunteering'?'volunteer@gearmotofoundation.org':values.topic==='Events'?'community_events@gearmotofoundation.org':(values.topic==='Corporate sponsorship'||values.topic==='Community partnership')?'partner@gearmotofoundation.org':values.topic==='Gear inquiry'?'gear@gearmotofoundation.org':values.topic==='Education inquiry'?'educate@gearmotofoundation.org':values.topic==='Recovery inquiry'?'recovery@gearmotofoundation.org':values.topic==='Assistance inquiry'?'assistance@gearmotofoundation.org':values.topic==='Shop inquiry'?'shop@gearmotofoundation.org':values.topic==='Giving inquiry'?'donate@gearmotofoundation.org':'info@gearmotofoundation.org';
  if(!env.RESEND_API_KEY||!env.CONTACT_FROM_EMAIL) return respond({error:'The contact form is being configured. Please email '+destination+' directly.'},503);
  const text=['New GEAR Moto Foundation contact submission','Name: '+values.name,'Email: '+values.email,'Phone: '+(values.phone||'Not provided'),'Topic: '+values.topic,'','Message:',values.message].join('\n');
  const rows=Object.entries(values).map(([k,v])=>'<tr><th style="text-align:left;padding:8px;border-bottom:1px solid #ddd">'+escapeHtml(k)+'</th><td style="padding:8px;border-bottom:1px solid #ddd;white-space:pre-wrap">'+escapeHtml(v)+'</td></tr>').join('');
  let provider;
  try{
    provider=await fetch('https://api.resend.com/emails',{method:'POST',headers:{Authorization:'Bearer '+env.RESEND_API_KEY,'Content-Type':'application/json'},body:JSON.stringify({from:env.CONTACT_FROM_EMAIL,to:[destination],reply_to:values.email,subject:'GEAR Contact: '+values.topic,text,html:'<h2>New website inquiry</h2><table>'+rows+'</table>'})});
  }catch{return respond({error:'Message delivery is temporarily unavailable. Please email '+destination+' directly.'},502);}
  if(!provider.ok)return respond({error:'Message delivery is temporarily unavailable. Please email us directly.'},502);
  return respond({ok:true},200);
}
export function onRequestGet(){return respond({error:'Method not allowed.'},405);}
