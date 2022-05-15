<?php

/**
 * Template Name: Partnerships
 *
 * @package WordPress
 * @subpackage Umanlink
 */

use App\Entity;
use Timber\Post;
use Timber\Timber;
use Rakit\Validation\Validator;

$context = Timber::get_context();

$context["post"] = new Post();

$context["entities"] = Entity::getPosts();

$context["blocks"] = [];

$validator = new Validator();

$validation = $validator->make($_POST, [
    'fullname' => 'required',
    'email' => 'required|email',
]);

$validation->validate();

if ($validation->passes()) {

    $context["submittedData"] =  $_POST;//$validation->getValidData();

    $labels = [
        'fullname' => 'Nom et prénom',
        'email' => 'Email',
        'phone' => 'Numéro de téléphone',
        'company' => 'Société',
        'message' => 'Message'
    ];

    $context["labels"] = $labels;

    Timber::render("pages/partnerships/form/success.twig", $context);
} else {

    Timber::render("pages/partnerships/index.twig", $context);
}
