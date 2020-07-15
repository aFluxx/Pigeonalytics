<?php

namespace App\Http\Controllers;

use App\Pigeon;
use App\Result;

class AverageYearMpmController extends Controller
{
    public function averageYearMpm()
    {
        // $results2020 = Result::with(['pigeon', 'race' => function ($query) {
        //     $query->whereYear('races.unloading_time', '=', 2020);
        // }])->get();

        $results = Result::with(['pigeon', 'race'])->get();

        $resultsGroupedPerPigeon = $results->mapToGroups(function ($item, $key) {
            return [$item->pigeon->ringnumber => $item['mpm']];
        });

        foreach ($resultsGroupedPerPigeon as $ringnumber => $mpms) {
            $data[] = [
                'ringnumber' => $ringnumber,
                'pigeon_id' => Pigeon::where('ringnumber', $ringnumber)->first()->id,
                'average' => array_sum($mpms->toArray()) / count($mpms),
                'count' => count($mpms)
            ];
        }

        return view('rapport/average-year-mpm')->with('data', $data);
    }
}
