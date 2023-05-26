<?php 

add_action( 'wp_enqueue_scripts', 'add_my_script' );
function add_my_script() {
    wp_enqueue_script(
        'your-script', // name your script so that you can attach other scripts and de-register, etc.
        get_stylesheet_directory_uri() . '/custom-script.js', // this is the location of your script file
        array('jquery') // this array lists the scripts upon which your script depends
    );
}

add_shortcode( 'my-logged-in-user', 'call_logged_in_user' );
function call_logged_in_user() {
    global $current_user;
    wp_get_current_user();
    echo $current_user->display_name;
}

add_action('wp_logout','auto_redirect_after_logout');

function auto_redirect_after_logout(){
  wp_safe_redirect( 'https://bujii.com/signin-signup/?forcelogin' );
  exit;
}

