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

$context["post"] = new Post();

$context["jobs"] = JobQuery::getJobs();

$context["blocks"] = ["banner", "intro", "career", "job_list", "form_modal"];

Timber::render("pages/become_umanien/index.twig", $context);