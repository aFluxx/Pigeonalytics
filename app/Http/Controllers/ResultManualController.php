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
        return view('models/result/manual/create')->with('races', Race::with(['dropzone'])->orderBy('unloading_time', 'DESC')->get());
    }

    public function store(Request $request)
    {
        $pigeon = Pigeon::firstOrCreate(['ringnumber' => $request->result_ringnumber]);
        $race = Race::where('id', $request->result_race)->first();

        $interval = calculateInterval($race->unloading_time, $request->result_arrival_time);

        $result = Result::firstOrCreate([
            'pigeon_id' => $pigeon->id,
            'race_id' => $race->id,
            'place_personal' => $request->result_place_personal,
            'arrival_time' => $request->result_arrival_time,
            'interval' =>  $interval,
            'mpm' => calculateMeterPerMinute($race, $interval)
        ]);

        return redirect()->route('result.edit', $result->id)->with('status', 'Profile updated!')->with([
            'message' => 'Imported result, start editing now!',
            'races' => Race::with(['dropzone'])->orderBy('unloading_time', 'DESC')->get(),
        ]);
    }
}
