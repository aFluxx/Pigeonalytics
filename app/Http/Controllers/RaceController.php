<?php

namespace App\Http\Controllers;

use App\Dropzone;
use App\Race;
use Illuminate\Http\Request;

class RaceController extends Controller
{
    public function index()
    {
        return view('models/race/index')->with('races', Race::all());
    }

    public function create()
    {
        return view('models/race/create')->with('dropzones', Dropzone::all());
    }

    public function store(Request $request)
    {
        $dropzone = Dropzone::find($request->race_dropzone);

        $race = new Race([
            'wind' => $request->race_wind,
            'overcast' => $request->race_overcast,
            'rainfall' => $request->race_rainfall,
            'unloading_time' => $request->race_unloading_time,
            'year' => $request->race_year,
            'type' => $request->race_type,
            'amount_of_pigeons' => $request->race_amount_pigeons,
        ]);

        $race->dropzone()->associate($dropzone);
        $race->save();

        return view('models/race/create')->with([
            'message' => 'Race created!',
            'dropzones' => Dropzone::all(),
        ]);
    }

    public function show(Race $race)
    {
        return view('models/race/show')->with('race', $race);
    }
}
