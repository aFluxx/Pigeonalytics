<?php

namespace App\Http\Controllers;

use App\Pigeon;
use App\Services\BestBreeders;
use Illuminate\Http\Request;

class BestBreedersController extends Controller
{
    public function index()
    {
        return view('models.pigeon.best-breeders.index');
    }

    public function show(Request $request)
    {
        $amountOfYears = calculateYearDifference($request->van_jaar, $request->tot_jaar);

        $pigeons = Pigeon::whereIn('year', $amountOfYears)
            ->with(["results" => function ($q) use ($request) {
                $q->where($request->which_coefficient, '<', $request->threshold);
            }])->get();

        $bestBreeders = new BestBreeders($pigeons, $request->threshold, $request->which_coefficient);

        return view('models.pigeon.best-breeders.show')->with([
            'requestData' => [
                'van_jaar' => $request->van_jaar,
                'tot_jaar' => $request->tot_jaar,
                'coeff' => $request->which_coefficient,
                'threshold' => $request->threshold,
            ],
            'weight' => $bestBreeders->getBestBreeders(),
        ]);
    }
}
