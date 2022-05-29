<?php

/**
 * Template Name: Become UmanLien
 *
 * @package WordPress
 * @subpackage Umanlink
 */

use App\Http\Request;
use App\Job\JobQuery;
use Timber\Post;
use Timber\Timber;
use Rakit\Validation\Validator;

if (!function_exists('wp_handle_upload')) {
    require_once(ABSPATH . 'wp-admin/includes/file.php');
}

$context = Timber::get_context();

$jobs = JobQuery::getJobs(20, [
    'meta_key' => 'isActive',
    'meta_value' => 1
]);

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
    'email' => 'Email invalide',
]);


$request = new Request();

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

if ($request->isPostMethod()) {

    if ($validation->passes()) {

        $data = $validation->getValidatedData();

        $message = Timber::fetch("email/job_submission_email.twig", [

            "data" => array_filter($data, fn ($v) => !is_array($v))
        ]);

        $file = $_FILES['file'];

        $movefile = wp_handle_upload($file, ["test_form" => false]);

        // Sending email

        $attachments = $movefile['file'];

        $headers = ['Content-Type: text/html; charset=UTF-8'];

        if ($movefile && isset($movefile['error'])) {

            wp_send_json(["data" => $movefile], 400);
        }

        // save in DB

        global $wpdb;

        $tableName = sprintf("%sjob_submission", $wpdb->prefix);

        try {

            $wpdb->insert($tableName, array(
                'created_at' => (new \DateTime())->format("Y-m-d H:i:s"),
                'first_name' => htmlspecialchars($data['first_name']),
                'last_name' => htmlspecialchars($data['last_name']),
                'email' => htmlspecialchars($data['email']),
                'phone' => htmlspecialchars($data['phone']),
                'entity' => htmlspecialchars($data['entity']),
                'job' => htmlspecialchars($data['job']),
                'cv' => str_replace($context["http_host"], "", htmlspecialchars($movefile['url'])),
            ));

            wp_mail("mrbileltn@gmail.com", "Candidature", $message,  $headers, $attachments);
        
        } catch (\Exception $e) {

            wp_send_json(["error" => $e->getMessage()], 400);
            exit();
        }

        wp_send_json(["data" => $data], 200);
        
        exit;
    
    } else {

        $errors = $validation->errors();

        wp_send_json($errors->firstOfAll(), 400);
    }
}

Timber::render("pages/become_umanien/index.twig", $context);
