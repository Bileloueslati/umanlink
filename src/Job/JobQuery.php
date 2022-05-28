<?php

namespace App\Job;

use Timber\Timber;

class JobQuery
{

    public static function getJobs(int $max = 20, $args = []): array
    {

        $args = array_merge([
            'post_type' => 'job',
            'posts_per_page' => $max
        ], $args);

        return Timber::get_posts($args);
    }
}
