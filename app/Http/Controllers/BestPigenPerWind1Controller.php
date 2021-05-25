<?php

namespace App\Http\Controllers;

use App\Race;
use App\Result;
use Illuminate\Http\Request;

class BestPigenPerWind1Controller extends Controller
{
    public function show(Request $request)
    {
        $query = Result::with('race')
            ->whereHas('race', function ($q) use ($request) {
                $q->where('wind', 'LIKE', '%' . $request->race_wind . '%');
            });

        if ($request->year != 'all') {
            $query->with('race')
                ->whereHas('race', function ($q) use ($request) {
                    $q->where('races.year', $request->year);
                });
        }

        $resultsPerPigeon = collect($query->get()->groupBy('pigeon_id')->all());

        $mapped = $resultsPerPigeon->map(function ($results, $key) {
            $totalSpeed = collect($results)->reduce(function ($carry, $result) {
                return $carry + $result->mpm;
            });

            $amountOfRaces = count($results);

            $avg = $totalSpeed / $amountOfRaces;

            return [
                'results' => $results,
                'avg' => $avg,
                'pigeon_id' => $results[0]->pigeon->id,
                'ringnumber' => $results[0]->pigeon->ringnumber,
                'amount_races' => $amountOfRaces,
            ];
        });

        dd($mapped);
        return view('models.pigeon.best-pigeon-per.show-wind')->with([
            'requestData' => [
                'wind' => $request->race_wind,
                'year' => $request->year,
            ],
            'pigeons' => $mapped,
        ]);
    }
}
