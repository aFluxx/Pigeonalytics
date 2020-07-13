<?php

namespace App\Http\Controllers;

use App\Pigeon;
use App\Race;
use App\Result;
use Illuminate\Http\Request;
use League\Csv\Reader;

class ResultKbdbController extends Controller
{
    public function create()
    {
        return view('models/result/kbdb/create')->with('races', Race::with(['dropzone'])->orderBy('unloading_time', 'DESC')->get());
    }

    public function store(Request $request)
    {
        $records = $this->getRecordsFromInput(fopen($request->files->get('result_list')->getPathName(), 'r+'));

        foreach ($records[1] as $offset => $record) {
            $pigeon = Pigeon::firstOrCreate(['ringnumber' => $record['ring']]);
            $race = Race::where('id', $request->result_race)->first();

            Result::firstOrCreate([
                'pigeon_id' => $pigeon->id,
                'race_id' => $race->id,
                'place_personal' => $record['pl'],
                'arrival_time' => $record['uur'] ? date_create_from_format('d-m-Y H:i:s', $record['uur']) : null,
                'interval' =>  null,
                'mpm' => $record['speed'],
                'nominated' => $record['get'],
                'place_club' => setPlace($record['pclub']),
                'coefficient_club' => calculateCoefficient($record['pclub'], $race->amount_of_pigeons_club),
                'place_provincial' => setPlace($record['pprov']),
                'coefficient_provincial' => calculateCoefficient($record['pprov'], $race->amount_of_pigeons_provincial),
                'place_zone' => setPlace($record['pzon']),
                'coefficient_zone' => calculateCoefficient($record['pzon'], $race->amount_of_pigeons_zone),
                'place_national' => setPlace($record['pnat']),
                'coefficient_national' => calculateCoefficient($record['pnat'], $race->amount_of_pigeons_national),
            ]);
        }

        return view('models/result/kbdb/create')->with([
            'message' => 'Imported ' . count($records[0]) . ' results',
            'races' => Race::with(['dropzone'])->orderBy('unloading_time', 'DESC')->get(),
        ]);
    }

    /**
     * Retrieve records from form input
     *
     * @param string $file
     * @return void
     */
    private function getRecordsFromInput($file)
    {
        $reader = Reader::createFromStream($file);
        $reader->setDelimiter(';');
        $reader->setHeaderOffset(0);

        return [$reader, $reader->getRecords()];
    }
}
