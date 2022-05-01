<?php

namespace App;

class Actions
{

    /**
     * Remove Gutenberg Block Library CSS from loading on the frontend
     */
    public static function remove_wp_block_library_css()
    {
        wp_dequeue_style('wp-block-library');
        wp_dequeue_style('wp-block-library-theme');
        wp_dequeue_style('global-styles');
        wp_dequeue_style('wc-blocks-style');
    }
}
