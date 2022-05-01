<?php

/**
 * Template Name: HomePage
 *
 * @package WordPress
 * @subpackage Twenty_Fourteen
 * @since Twenty Fourteen 1.0
 */

use Timber\Post;
use Timber\Timber;

$context = Timber::get_context();

$context["post"] = new Post();

Timber::render("pages/home/index.twig", $context);
