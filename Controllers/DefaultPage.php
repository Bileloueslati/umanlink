<?php

/**
 * Template Name: Default template
 *
 * @package WordPress
 * @subpackage Umanlink
 */

use Timber\Post;
use Timber\Timber;

$context = Timber::get_context();

$context["post"] = new Post();

Timber::render("pages/default.twig", $context);