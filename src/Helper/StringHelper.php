<?php

namespace App\Helper;

class StringHelper {


    public static function removeSlash(string $str) {

         return str_replace("/", "", $str);
    }
}