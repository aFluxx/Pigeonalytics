<?php

namespace App\Http\Controllers;

use App\Pigeon;
use App\Race;
use App\Result;
use Illuminate\Http\Request;
use League\Csv\Reader;

class ResultUploadController extends Controller
{
    public function create()
    {
        return view('models/result/upload/create')->with('races', Race::with(['dropzone'])->orderBy('unloading_time', 'DESC')->get());
    }

    public function store(Request $request)
    {
        $records = $this->getRecordsFromInput(fopen($request->files->get('result_list')->getPathName(), 'r+'));

        foreach ($records[1] as $offset => $record) {
            $pigeon = Pigeon::firstOrCreate(['ringnumber' => $record['ringnumber']]);
            $race = Race::where('id', $request->result_race)->first();

            $interval = calculateInterval($race->unloading_time, $record['arrival']);

            Result::firstOrCreate([
                'pigeon_id' => $pigeon->id,
                'race_id' => $race->id,
                'place_personal' => $record['place'],
                'arrival_time' => $record['arrival'] ?: null,
                'interval' =>  $record['arrival'] ? $interval : null,
                'mpm' => $record['arrival'] ? calculateMeterPerMinute($race, $interval) : null,
                'place_club' => 1000000,
                'coefficient_club' => 1000000,
                'place_provincial' => 1000000,
                'coefficient_provincial' => 1000000,
                'place_zone' => 1000000,
                'coefficient_zone' => 1000000,
                'place_national' => 1000000,
                'coefficient_national' => 1000000,
            ]);
        }

        return view('models/result/upload/create')->with([
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
