<?php
/**
 * Plugin Name: Ethan Dao Theme Bootstrap
 * Description: Activates the Ethan Dao theme automatically for Docker/Dokploy WordPress installs.
 * Version: 1.0.0
 * Author: Ethan Dao
 */

if (!defined('ABSPATH')) {
    exit;
}

add_action('init', function (): void {
    $theme_slug = 'ethan-dao-vanilla';

    if (wp_get_theme()->get_stylesheet() === $theme_slug) {
        return;
    }

    if (!wp_get_theme($theme_slug)->exists()) {
        return;
    }

    switch_theme($theme_slug);
}, 1);
