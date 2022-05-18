<?php

/**
 * Template Name: Become UmanLien
 *
 * @package WordPress
 * @subpackage Umanlink
 */

use App\Job\JobQuery;
use Timber\Post;
use Timber\Timber;

$context = Timber::get_context();

$jobs = JobQuery::getJobs();

$context["post"] = new Post();

$context["jobs"] = $jobs;

$context["blocks"] = ["banner", "intro", "career", "job_list", "form_modal"];

$jobEntities = array_unique(array_map(

    function (Post $job) {

        return get_field("entity", $job)->post_title;
    },
    $jobs
));

$context["jobEntities"] = $jobEntities;

Timber::render("pages/become_umanien/index.twig", $context);
