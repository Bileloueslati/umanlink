<?php

namespace App;

use Timber\Timber;

class Entity
{

    public static function getPosts(): array
    {

        $entities = Timber::get_posts([
            'post_type' => 'entity',
            // Get all posts
            'posts_per_page' => -1,
        ]);

        return $entities;
    }
}
