<?php

use Timber\Post;
use Timber\Timber;

$context = Timber::get_context();

$context["post"] = new Post();

Timber::render("pages/entity/single.twig", $context);
