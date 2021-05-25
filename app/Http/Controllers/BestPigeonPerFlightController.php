<?php

namespace App\Http\Controllers;

use App\BestPigeonPer;
use App\Dropzone;
use App\Result;
use Illuminate\Http\Request;

class BestPigeonPerFlightController extends Controller
{
    public function index()
    {
        return view('models.pigeon.best-pigeon-per.index')->with([
            'dropzones' => Dropzone::all(),
        ]);
    }

    public function show(Request $request)
    {
        $query = Result::with('race.dropzone')
            ->whereHas('race.dropzone', function ($q) use ($request) {
                $q->where('dropzones.id', $request->dropzone);
            });

        if ($request->year != 'all') {
            $query->with('race')
                ->whereHas('race', function ($q) use ($request) {
                    $q->where('races.year', $request->year);
                });
        }

        $results = $query->get();

        $groupedPerPigeon = $results->groupBy('pigeon_id');

        $bestPigeonsPer = collect();

        foreach ($groupedPerPigeon as $pigeonResults) {

            $pigeon = new BestPigeonPer($request->which_coefficient);

            foreach ($pigeonResults as $result) {
                $pigeon->setPigeonId($result->pigeon->id);
                $pigeon->setPigeonRingnumber($result->pigeon->ringnumber);
                $pigeon->setResult($result);
            }

            $pigeon->calculateAvgCoefficient();
            $pigeon->setAmountOfRaces();

            $bestPigeonsPer->push($pigeon);
        }

        return view('models.pigeon.best-pigeon-per.show-wind')->with([
            'requestData' => [
                'dropzone' => Dropzone::where('id', $request->dropzone)->first()->name,
                'year' => $request->year,
                'coeff' => $request->which_coefficient,
            ],
            'pigeons' => $bestPigeonsPer,
        ]);
    }
}
