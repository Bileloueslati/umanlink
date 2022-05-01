<?php

/**
 * Template Name: HomePage
 *
 * @package WordPress
 * @subpackage Umanlink
 */

use Timber\Post;
use Timber\Timber;

$context = Timber::get_context();

$context["post"] = new Post();

Timber::render("pages/home/index.twig", $context);
