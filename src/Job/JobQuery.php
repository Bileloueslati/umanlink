<?php

namespace App\Job;

use Timber\Timber;

class JobQuery
{

    public static function getJobs(int $max = 20): array
    {
        return Timber::get_posts([
            'post_type' => 'job',
            'posts_per_page' => $max,
        ]);
    }
}
