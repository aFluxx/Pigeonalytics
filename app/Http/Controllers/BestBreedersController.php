<?php

namespace App\Http\Controllers;

use App\Pigeon;
use DateTime;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class BestBreedersController extends Controller
{
    public function index()
    {
        return view('models.pigeon.best-breeders.index');
    }

    public function show(Request $request)
    {
        $diff = $request->tot_jaar - $request->van_jaar;
        $currentJaar = $request->van_jaar;
        $years = [];
        $counter = 0;

        while ($counter <= $diff) {
            $years[] = $currentJaar;
            $currentJaar++;
            $counter++;
        }

        // DB::enableQueryLog(); // Enable query log
        // $pigeons = Pigeon::whereIn('year', $years)
        //     ->with(["results" => function ($q) use ($request) {
        //         $q->where($request->which_coefficient, '<', $request->threshold);
        //     }])->get();
        // dd(DB::getQueryLog()); // Show results of log

        $pigeons = Pigeon::whereIn('year', $years)
            ->with(["results" => function ($q) use ($request) {
                $q->where($request->which_coefficient, '<', $request->threshold);
            }])->get();


        $weight = [];

        foreach ($pigeons as $pigeon) {
            foreach ($pigeon->results as $result) {
                if ($pigeon->father) {
                    if (array_key_exists($pigeon->father->ringnumber, $weight)) {
                        $weight[$pigeon->father->ringnumber]['weigth'] = $weight[$pigeon->father->ringnumber]['weigth'] + 1;
                    } else {
                        $weight[$pigeon->father->ringnumber] = [
                            'pigeon' => $pigeon->father,
                            'weigth' => 1
                        ];

                        $weight[$pigeon->father->ringnumber]['results'] = [];
                    }

                    array_push($weight[$pigeon->father->ringnumber]['results'], $result);
                }

                if ($pigeon->mother) {
                    if (array_key_exists($pigeon->mother->ringnumber, $weight)) {
                        $weight[$pigeon->mother->ringnumber]['weigth'] = $weight[$pigeon->mother->ringnumber]['weigth'] + 1;
                    } else {
                        $weight[$pigeon->mother->ringnumber] = [
                            'pigeon' => $pigeon->mother,
                            'weigth' => 1
                        ];

                        $weight[$pigeon->mother->ringnumber]['results'] = [];
                    }

                    array_push($weight[$pigeon->mother->ringnumber]['results'], $result);
                }
            }
        }

        return view('models.pigeon.best-breeders.show')->with([
            'requestData' => [
                'van_jaar' => $request->van_jaar,
                'tot_jaar' => $request->tot_jaar,
                'coeff' => $request->which_coefficient,
                'threshold' => $request->threshold,
            ],
            'weight' => $weight
        ]);
    }
}
