<?php

namespace App\Http\Controllers;

use App\Pigeon;
use App\Race;
use App\Result;
use Carbon\Carbon;
use Illuminate\Http\Request;

class ResultManualController extends Controller
{
    public function create()
    {
        return view('models/result/manual/create')->with('races', Race::with(['dropzone'])->orderBy('unloading_time', 'DESC')->get());
    }

    public function store(Request $request)
    {
        $race = Race::where('id', $request->result_race)->first();
        $pigeon = Pigeon::firstOrCreate(['ringnumber' => $request->result_ringnumber]);

        $interval = calculateInterval($race->unloading_time, $request->result_arrival_time);

        $result = Result::firstOrCreate([
            'pigeon_id' => $pigeon->id,
            'race_id' => $race->id,
            'place_personal' => $request->result_place_personal,
            'arrival_time' =>
            $request->result_arrival_date ? $request->result_arrival_date . ' ' . $request->result_arrival_time :
                Carbon::parse($race->unloading_time)->format('Y-m-d') . ' ' . $request->result_arrival_time,
            'interval' =>  $interval,
            'mpm' => calculateMeterPerMinute($race, $interval)
        ]);

        return redirect()->route('result.edit', $result->id)->with('status', 'Profile updated!')->with([
            'message' => 'Imported result, start editing now!',
            'races' => Race::with(['dropzone'])->orderBy('unloading_time', 'DESC')->get(),
        ]);
    }

    // private function getArrivalTime($requestArrivalDate, $requestArrivalTime, $mpm, $unloadingTime)
    // {
    //     if (!$mpm) {
    //         if ($requestArrivalTime) {
    //             return $requestArrivalDate . ' ' . $requestArrivalTime;
    //         } else {
    //             return  Carbon::parse($unloadingTime)->format('Y-m-d') . ' ' . $request->result_arrival_time;
    //         }
    //     } else {
    //         return null;
    //     }
    // }
}
