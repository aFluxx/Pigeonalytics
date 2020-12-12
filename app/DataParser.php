<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use ParseCsv\Csv;

class DataParser extends Model
{
    public function parse($path)
    {
        $csv = new Csv();

        $csv->delimiter = ";";
        $csv->parse($path);

        return collect($csv->data);
    }
}
