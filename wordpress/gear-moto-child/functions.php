<?php
/**
 * GEAR Moto Foundation child theme enhancements.
 */
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}
add_action( 'wp_enqueue_scripts', function () {
    wp_enqueue_style(
        'gear-moto-fonts',
        'https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800&family=Inter:wght@400;500;600;700;800&display=swap',
        array(),
        null
    );
    wp_enqueue_style(
        'gear-moto-child',
        get_stylesheet_uri(),
        array( 'ct-main-styles' ),
        wp_get_theme()->get( 'Version' )
    );
}, 20 );
