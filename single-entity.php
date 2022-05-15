<?php

use Timber\Post;
use Timber\Timber;

$context = Timber::get_context();

$context["post"] = new Post();

$context["blocks"] = ["banner", "intro", "success", "career"];

Timber::render("pages/cpt/entity/single.twig", $context);
