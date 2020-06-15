<?php

namespace App\Http\Controllers;

use App\Race;
use App\Result;
use Illuminate\Http\Request;

class ResultController extends Controller
{
    public function index()
    {
        return view('models/result/index')
            ->with(
                'results',
                Result::with(['race', 'race.dropzone', 'pigeon'])
                    ->get()
            );
    }

    public function indexVitesse()
    {
        return view('models/result/index-vitesse')
            ->with(
                'results',
                Result::with(['race', 'race.dropzone', 'pigeon'])
                    ->where('race.dropzone.discipline', 'vit')
                    ->get()
            );
    }

    public function indexHalveFond()
    {
        return view('models/result/index-halve-fond')
            ->with(
                'results',
                Result::with(['race', 'race.dropzone', 'pigeon'])
                    ->where('race.dropzone.discipline', 'hfo')
                    ->get()
            );
    }

    public function indexKleineFond()
    {
        return view('models/result/index-kleine-fond')
            ->with(
                'results',
                Result::with(['race', 'race.dropzone', 'pigeon'])
                    ->where('race.dropzone.discipline', 'kle')
                    ->get()
            );
    }

    public function indexFond()
    {
        return view('models/result/index-fond')
            ->with(
                'results',
                Result::with(['race', 'race.dropzone', 'pigeon'])
                    ->where('race.dropzone.discipline', 'fon')
                    ->get()
            );
    }

    public function indexGroteFond()
    {
        return view('models/result/index-grote-fond')
            ->with(
                'results',
                Result::with(['race', 'race.dropzone', 'pigeon'])
                    ->where('race.dropzone.discipline', 'gfo')
                    ->get()
            );
    }

    public function edit(Result $result)
    {
        return view('models/result/edit')->with([
            'result' => $result,
            'races' => Race::with(['dropzone'])->orderBy('unloading_time', 'DESC')->get(),
        ]);
    }

    public function update(Request $request, Result $result)
    {
        $race = Race::where('id', $request->result_race)->first();
        $interval = !$request->result_arrival_time ? null : calculateInterval($race->unloading_time, $request->result_arrival_time);

        $result->race_id = $request->result_race;
        $result->arrival_time  = $request->result_arrival_time;
        $result->interval = $interval;
        $result->mpm = !$request->result_arrival_time ? $result->mpm : calculateMeterPerMinute($race, $interval);
        $result->place_personal  = $request->result_place_personal ?: 1000000;
        $result->nominated  = $request->result_nominated;

        $result->place_club = $request->result_place_club ?: 1000000;
        $result->coefficient_club = $race->amount_of_pigeons_club
            ? calculateCoefficient($request->result_place_club, $race->amount_of_pigeons_club)
            : 1000000;

        $result->place_provincial = $request->result_place_provincial ?: 1000000;
        $result->coefficient_provincial = $race->amount_of_pigeons_provincial
            ? calculateCoefficient($request->result_place_provincial, $race->amount_of_pigeons_provincial)
            : 1000000;

        $result->place_zone = $request->result_place_zone ?: 1000000;
        $result->coefficient_zone = $race->amount_of_pigeons_zone
            ? calculateCoefficient($request->result_place_zone, $race->amount_of_pigeons_zone)
            : 1000000;

        $result->place_national = $request->result_place_national ?: 1000000;
        $result->coefficient_national = $race->amount_of_pigeons_national
            ? calculateCoefficient($request->result_place_national, $race->amount_of_pigeons_national)
            : 1000000;

        $result->place_regio = $request->result_place_national ?: 1000000;
        $result->coefficient_national = $race->amount_of_pigeons_national
            ? calculateCoefficient($request->result_place_national, $race->amount_of_pigeons_national)
            : 1000000;

        $result->place_national = $request->result_place_national ?: 1000000;
        $result->coefficient_national = $race->amount_of_pigeons_national
            ? calculateCoefficient($request->result_place_national, $race->amount_of_pigeons_national)
            : 1000000;

        $result->place_regio = $request->result_place_regio ?: 1000000;
        $result->coefficient_regio = $race->amount_of_pigeons_national
            ? calculateCoefficient($request->result_place_regio, $race->amount_of_pigeons_regio)
            : 1000000;

        $result->place_overkoepeling = $request->result_place_overkoepeling ?: 1000000;
        $result->coefficient_overkoepeling = $race->amount_of_pigeons_overkoepeling
            ? calculateCoefficient($request->result_place_overkoepeling, $race->amount_of_pigeons_overkoepeling)
            : 1000000;

        $result->save();

        return redirect()->route('result.edit', $result->id)->with([
            'message' => 'Result updated!',
            'result' => $result,
            'races' => Race::with(['dropzone'])->orderBy('unloading_time', 'DESC')->get(),
        ]);
    }
}
