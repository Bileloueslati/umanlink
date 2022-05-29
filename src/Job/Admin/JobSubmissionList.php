<?php

namespace App\Job\Admin;

use Timber\Timber;

class JobSubmissionList
{

    const ITEMS_PER_PAGE = 30;

    public function __invoke()
    {

        global $wpdb;

        $tableName = sprintf("%sjob_submission", $wpdb->prefix);

        $itemsNumberQuery = "SELECT COUNT(*) FROM $tableName";

        $itemsNumber = $wpdb->get_var($itemsNumberQuery);

        wp_reset_query();

        $pageNumber = $_GET["number"] ?? 1;

        $totalPages = ceil ($itemsNumber / self::ITEMS_PER_PAGE);  

        $startAt = self::ITEMS_PER_PAGE * ($pageNumber - 1);

        $query = "SELECT * FROM $tableName ORDER BY created_at DESC LIMIT $startAt, 20";

        $data = $wpdb->get_results($query);

        $paginationUrl = admin_url( "admin.php?page=job_submission&number=");

        return Timber::render("admin/job_submission/index.twig", [

            "data" => $data,
            'itemsNumber' => $itemsNumber,
            'paginationUrl' => $paginationUrl,
            'pageNumber' => $pageNumber,
            'totalPages' => $totalPages
      ]);
        
    }
}