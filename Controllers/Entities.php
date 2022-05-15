<?php

/**
 * Template Name: Entity
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

$context["blocks"] = ["banner", "entities", "locations"];

Timber::render("pages/entity/index.twig", $context);