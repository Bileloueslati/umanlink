<?php

/**
 * Template Name: HomePage
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

Timber::render("pages/home/index.twig", $context);

