<?php

namespace App\Http\Controllers;

use App\Result;

class BestPigeonController extends Controller
{
    public function averageYearMpm()
    {

        $resultsInYear = Result::with(['pigeon', 'race' => function ($query) {
            $query->whereYear('races.unloading_time', '=', 2020);
        }])
            ->get();

        $groupedPerPigeon = $resultsInYear->mapToGroups(function ($item, $key) {
            return [$item->pigeon->ringnumber => $item['mpm']];
        });

        $toSend = [];

        foreach ($groupedPerPigeon as $ringnumber => $results) {
            $toSend[] = [
                'ringnumber' => $ringnumber,
                'average' => array_sum($results->toArray()) / count($results),
                'count' => count($results)
            ];
        }

        return view('rapport/average-year-mpm')->with([
            'data' => $toSend
        ]);
    }
}
