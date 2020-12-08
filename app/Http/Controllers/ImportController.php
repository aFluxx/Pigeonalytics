<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Pigeon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use ParseCsv\Csv;

class ImportController extends Controller
{
    public function showImportPage()
    {
        return view('import.index');
    }

    public function handleImportCompu()
    {
        $pigeons = $this->parseData(Storage::disk('local')->get('duiven.csv'));

        $this->goThroughPigeons($pigeons);
    }

    private function parseData($path)
    {
        $csv = new Csv();

        $csv->delimiter = ";";
        $csv->parse($path);

        return collect($csv->data);
    }

    private function goThroughPigeons($pigeons)
    {
        $pigeons->each(function ($pigeon, $key) {
            $ringnumber = $this->forgeRingnumber('BE', $pigeon['jaar'], $pigeon['ring']);

            $pigeonInSystem = Pigeon::where('ringnumber', $ringnumber)->first();

            if ($pigeonInSystem) {
                $pigeonInSystem->gender = $this->setGender($pigeon['geslacht']);
                $pigeonInSystem->save();
            }
        });
    }

    private function forgeRingnumber($landcode, $jaar, $ring)
    {
        return $landcode . '-' . substr($jaar, 2, 2) . '-' . $ring;
    }

    private function setGender($geslacht)
    {
        if ($geslacht == 'M') {
            return 'm';
        } else if ($geslacht == 'V') {
            return 'f';
        }
    }
}
