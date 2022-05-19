<?php

/**
 * Template Name: Become UmanLien
 *
 * @package WordPress
 * @subpackage Umanlink
 */

use App\Job\JobQuery;
use Timber\Post;
use Timber\Timber;
use Rakit\Validation\Validator;

if (!function_exists('wp_handle_upload')) {
    require_once(ABSPATH . 'wp-admin/includes/file.php');
}

$context = Timber::get_context();

$jobs = JobQuery::getJobs();

$context["post"] = new Post();

$context["jobs"] = $jobs;

$context["blocks"] = ["banner", "intro", "career", "job_list", "form_modal", "gallery"];

$jobEntities = array_unique(array_map(

    function (Post $job) {

        return get_field("entity", $job)->post_title;
    },
    $jobs
));

$context["jobEntities"] = $jobEntities;

$validator = new Validator([
	'required' => 'Champ obligatoire',
	'email' => 'Email invalid',
]);

$validation = $validator->make($_POST + $_FILES, [
    'last_name' => 'required',
    'first_name' => 'required',
    'email' => 'required|email',
    'phone' => 'required',
    'file' => 'required|uploaded_file',
    'entity' => 'required',
    'job' => 'required'
]);

$validation->validate();


if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    if ($validation->passes()) {

        $message = Timber::fetch("email/job_submission_email.twig", [

            "data" => array_filter($validation->getValidatedData(), fn($v) => !is_array($v))
        ]);

        $file = $_FILES['file'];

        $movefile = wp_handle_upload($file, ["test_form" => false]);

        // Sending email

        $attachments = $movefile['file'];

        $headers = ['Content-Type: text/html; charset=UTF-8'];

        if ($movefile && isset($movefile['error'])) {

            wp_send_json(["data" => $movefile], 400);
        }
        wp_mail("mrbileltn@gmail.com", "Candidature", $message,  $headers, $attachments);

        wp_send_json(["data" => $_POST], 200);

        exit;
    } else {

        $errors = $validation->errors();

        wp_send_json($errors->firstOfAll(), 400);
    }
}

Timber::render("pages/become_umanien/index.twig", $context);
