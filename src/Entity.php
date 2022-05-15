<?php

namespace App;

use Timber\Timber;

class Entity
{

    public static function getPosts($number = -1): array
    {

        $entities = Timber::get_posts([
            'post_type' => 'entity',
            // Get all posts
            'posts_per_page' => $number,
        ]);

        return $entities;
    }
}
