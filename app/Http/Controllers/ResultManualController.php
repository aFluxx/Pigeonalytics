<?php

namespace App\Http\Controllers;

use App\Pigeon;
use App\Race;
use App\Result;
use Illuminate\Http\Request;

class ResultManualController extends Controller
{
    public function create()
    {
        return view('models/result/manual/create')->with('races', Race::all());
    }

    public function store(Request $request)
    {
        $pigeon = Pigeon::where('ringnumber', $request->result_ringnumber)->first();
        $race = Race::where('id', $request->result_race)->first();

        $result = new Result();

        if ($pigeon) {
            $result->pigeon_id      = $pigeon->id;
        } else {
            $result->pigeon_id      = (new Pigeon(['ringnumber' => $request->result_ringnumber]))->save();
        }
        $result->race_id            = $race->id;
        $result->arrival_time       = $request->result_arrival_time;
        $result->interval           = $result->calculateInterval($race->unloading_time, $request->result_arrival_time);
        $result->mpm                = $result->calculateMeterPerMinute($race, $result->interval);

        $result->save();

        return view('models/result/manual/create')->with([
            'message' => 'Imported result',
            'races' => Race::all(),
        ]);
    }
}
