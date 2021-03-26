<?php

namespace App\Http\Controllers;

use App\Result;
use Illuminate\Http\Request;

class AcePigeonController extends Controller
{
    public function index()
    {
        return view('models.pigeon.ace-pigeons.index');
    }

    public function show(Request $request)
    {
        $results = Result::whereHas('race', function ($query) use ($request) {
            $query->where('year', $request->year);
            $query->where('category', $request->which_category);
            $query->where('type', 'competition');
            $query->where('no_ace', 0);
        })->get();

        $resultsGroupedPerPigeon = $results->groupBy('pigeon_id');

        $aceResults = collect();

        foreach ($resultsGroupedPerPigeon as $pigeon) {
            $aceResults[] = $this->getXBestResults($pigeon, $request->amount_of_races);
        }

        return view('models.pigeon.ace-pigeons.show')->with([
            'requestData' => [],
            'acePigeons' => $aceResults,
        ]);
    }

    private function getXBestResults($results, $x)
    {
        $calculated = [];

        $calculated['pigeon_id'] = $results->first()->pigeon->id;
        $calculated['ringnumber'] = $results->first()->pigeon->ringnumber;

        $coeffsToWorkWith = collect();

        $results->each(function ($result, $key) use ($coeffsToWorkWith) {
            $whichCoefficient = 'coefficient_provincial';

            if ($result->coefficient_zone < $result->coefficient_provincial) {
                $whichCoefficient = 'coefficient_zone';
            }

            if ($result->coefficient_national < $result->coefficient_zone) {
                $whichCoefficient = 'coefficient_national';
            }

            if ($result->coefficient_provincial == 1000000.0 || $result->coefficient_zone == 1000000.0 || $result->coefficient_national == 1000000.0) {
                return;
            } else {
                $coeffsToWorkWith[] = round($result->$whichCoefficient, 4);
            }
        });

        $calculatedCoefficient = $coeffsToWorkWith->sort()->take($x)->sum();
        $calculated['amountOfRacesWithValidCoefficient'] = $coeffsToWorkWith->sort()->take($x)->count();

        if ($calculatedCoefficient != 0 && $calculatedCoefficient != null) {
            $calculated['coefficient'] = $calculatedCoefficient;
        }

        return $calculated;
    }
}
