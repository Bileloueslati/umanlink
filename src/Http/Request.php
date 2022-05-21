<?php

namespace App\Http;

use Timber\Request as TimberRequest;

class Request extends TimberRequest
{

    public function getMethod(): string
    {

        return $_SERVER["REQUEST_METHOD"];
    }


    public function isPostMethod(): bool
    {

        return $this->getmethod() == "POST";
    }
}
