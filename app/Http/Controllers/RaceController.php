<?php

namespace App\Http\Controllers;

use App\Dropzone;
use App\Race;
use Carbon\Carbon;
use Illuminate\Http\Request;

class RaceController extends Controller
{
    public function index()
    {
        return view('models/race/index')->with('races', Race::with(['dropzone'])->get());
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
            'wind_strength' => $request->race_wind_strength,
            'overcast' => $request->race_overcast,
            'rainfall' => $request->race_rainfall,
            'unloading_time' => $request->race_unloading_time,
            'year' => $request->race_year,
            'type' => $request->race_type,
            'category' => $request->race_category,
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

    public function edit(Race $race)
    {
        return view('models/race/edit')->with([
            'dropzones' => Dropzone::all(),
            'race' => $race
        ]);
    }

    public function update(Request $request, Race $race)
    {
        $race->dropzone_id = $request->race_dropzone;
        $race->unloading_time = $request->race_unloading_time;
        $race->wind = $request->race_wind;
        $race->wind_strength = $request->race_wind_strength;
        $race->overcast = $request->race_overcast;
        $race->rainfall = $request->race_rainfall;
        $race->year = Carbon::parse($request->race_unloading_time)->format('Y');
        $race->type = $request->race_type;
        $race->category = $request->race_category;
        $race->amount_of_pigeons = $request->race_dropzone;

        $race->save();

        return redirect()->route('race.edit', $race->id)->with([
            'message' => 'Race updated!',
            'dropzones' => Dropzone::all(),
            'race' => $race
        ]);
    }
}
