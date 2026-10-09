<?php
if ( ! defined( 'ABSPATH' ) ) { exit; }
/**
 * GEAR homepage. Add a Shortcode block containing [gear_homepage]
 * to the static WordPress homepage.
 */
add_shortcode( 'gear_homepage', function() {
    $asset = trailingslashit( get_stylesheet_directory_uri() ) . 'assets/brand/';
    ob_start();
    ?>
    <div class="gear-home-hero">
      <div class="gear-home-hero__inner">
        <img class="gear-home-hero__logo" src="<?php echo esc_url( $asset . 'Gear_Logo_White.png' ); ?>" alt="GEAR Moto Foundation – Gear, Education, Assistance and Recovery" loading="eager" decoding="async">
        <div class="gear-eyebrow"><?php echo esc_html__( 'Protect the Ride. Support the Rider.', 'gear-moto-child' ); ?></div>
        <h1><span>GEAR UP.</span><span>TRAIN SMART.</span><span class="accent">RECOVER STRONG.</span></h1>
        <p>Building a motorcycle community with greater access to protective gear, meaningful rider training, and responsible support when the unexpected happens.</p>
        <div class="gear-actions"><a class="gear-button gear-button--primary" href="#gear-programs">Explore Programs</a><a class="gear-button" href="#gear-support">Get Involved</a></div>
      </div>
    </div>
    <section class="gear-section" id="gear-about"><div class="gear-section__inner">
      <div class="gear-eyebrow" style="color:#a70c2c">OUR PURPOSE</div>
      <h2>MORE THAN A RIDE.<br>A COMMUNITY.</h2>
      <p class="gear-intro">We're building programs that help riders prepare, develop skills, and find community-driven support after serious accidents.</p>
    </div></section>
    <section class="gear-section" id="gear-programs" style="background:#fafbfc"><div class="gear-section__inner">
      <h2>THREE WAYS TO MAKE A DIFFERENCE.</h2>
      <div class="gear-grid">
        <article class="gear-card"><img src="<?php echo esc_url( $asset . 'Gear_E.png' ); ?>" alt="" loading="lazy"><h3>SAFETY GEAR</h3><p>Working to reduce financial barriers to essential protective equipment.</p></article>
        <article class="gear-card"><img src="<?php echo esc_url( $asset . 'Gear_A.png' ); ?>" alt="" loading="lazy"><h3>RIDER EDUCATION</h3><p>Developing support for training courses, riding skills and endorsements.</p></article>
        <article class="gear-card"><img src="<?php echo esc_url( $asset . 'Gear_R.png' ); ?>" alt="" loading="lazy"><h3>RECOVERY SUPPORT</h3><p>Designing responsible programs for qualifying accident-related medical expenses.</p></article>
      </div>
    </div></section>
    <section class="gear-section gear-section--dark" id="gear-support"><div class="gear-section__inner">
      <img class="gear-footer-logo" src="<?php echo esc_url( $asset . 'Gear_Logo_White.png' ); ?>" alt="GEAR Moto Foundation" loading="lazy">
      <h2>STRONGER TOGETHER.</h2>
      <p>Interested in supporting gear, education or rider recovery? Watch for updates as we build partnerships, community events and future ways to participate.</p>
    </div></section>
    <div class="gear-notice">Development preview: grant applications and online donations are not yet open.</div>
    <?php
    return ob_get_clean();
} );
