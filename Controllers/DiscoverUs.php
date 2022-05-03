<?php

/**
 * Template Name: Discover us
 *
 * @package WordPress
 * @subpackage Umanlink
 */

use App\Entity;
use Timber\Post;
use Timber\Timber;

$context = Timber::get_context();

$context["post"] = new Post();

$context["entities"] = Entity::getPosts();

$context["blocks"] = ["banner", "video", "about_us", "implementation", "entities", "engagement"];

Timber::render("pages/discover_us/index.twig", $context);