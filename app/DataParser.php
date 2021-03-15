<?php

namespace App;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use ParseCsv\Csv;

class DataParser extends Model
{
    /**
     * Wrapper around Parse\Csv
     */
    public function parse(string $path): Collection
    {
        $csv = new Csv();

        $csv->delimiter = ";";
        $csv->parse($path);

        return collect($csv->data);
    }
}
