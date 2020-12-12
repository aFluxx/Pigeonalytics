<?php

namespace App\Http\Controllers;

use App\DataParser;
use App\Http\Controllers\Controller;
use App\PigeonImport;
use Illuminate\Support\Facades\Storage;

class ImportController extends Controller
{
    public function index()
    {
        return view('import.index');
    }

    public function handle(string $path)
    {
        $parser = new DataParser();
        $importer = new PigeonImport();

        $pigeons = $parser->parse(Storage::disk('local')->get($path));

        $importer->iterate($pigeons);
    }
}
