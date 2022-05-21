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
use App\Http\Request;

$context = Timber::get_context();

$context["post"] = new Post();

$context["entities"] = Entity::getPosts();

$context["blocks"] = [];

$validator = new Validator([
    'required' => 'Champ obligatoire',
	'email' => 'Email invalide',
]);

$request = new Request();

$validation = $validator->make($request->post, [
    'fullname' => 'required',
    'email' => 'required|email',
    'company' => 'required',
    'phone' => 'required'
]);

$context["formErrors"] = [];

if ($request->isPostMethod()) {

    $validation->validate();

    if ($validation->passes()) {

        $context["submittedData"] =  $request->post;

        $labels = [
            'fullname' => 'Nom et prénom',
            'email' => 'Email',
            'phone' => 'Numéro de téléphone',
            'company' => 'Société',
            'message' => 'Message'
        ];

        $context["labels"] = $labels;

        // Sending email

        $headers = ['Content-Type: text/html; charset=UTF-8'];

        $message = Timber::fetch("email/contact_form_email.twig", [

            "data" => $request->post,
            "labels" => $labels
        ]);

        wp_mail("mrbileltn@gmail.com", "Message depuis le site", $message);

        // Render succces view to turbo frames

        Timber::render("pages/partnerships/form/success.twig", $context);
    
    } else {

        $errors = $validation->errors();

        $context["formErrors"] = $errors->firstOfAll();

    }
}

Timber::render("pages/partnerships/index.twig", $context);
