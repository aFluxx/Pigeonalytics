<?php

namespace App\Http\Controllers;

use App\Result;
use App\Services\BestResultDecider;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;

class AcePigeonController extends Controller
{
    private Request $request;

    public function index()
    {
        return view('models.pigeon.ace-pigeons.index');
    }

    public function show(Request $request)
    {
        $this->request = $request;

        $results = Result::whereHas('race', function ($query) {
            $query->where('year', $this->request->year);
            $query->where('category', $this->request->which_category);
            $query->where('type', 'competition');
            $query->where('no_ace', 0);
        })->get();

        $resultsGroupedPerPigeon        = $this->groupResultsPerPigeon($results);
        $aceResults                     = $this->getXBestResultsPerPigeon($resultsGroupedPerPigeon);
        $aceResultsWithoutZeroValues    = $this->filterAceResults($aceResults);

        return view('models.pigeon.ace-pigeons.show')->with([
            'requestData' => [
                'category' => $this->request->which_category,
                'year' => $this->request->year,
                'amountOfRaces' => $this->request->amount_of_races,
            ],
            'acePigeons' => $aceResultsWithoutZeroValues,
        ]);
    }

    /**
     * Group all retrieved results per pigeon, this makes it easier to work with the data in a structural manner.
     */
    private function groupResultsPerPigeon(Collection $results): Collection
    {
        return $results->groupBy('pigeon_id');
    }

    /**
     * Given an amount of races, find out the best results.
     */
    private function getXBestResultsPerPigeon(Collection $resultsGroupedPerPigeon): Collection
    {
        $aceResults = collect();

        foreach ($resultsGroupedPerPigeon as $results) {
            $aceResults[] = (new BestResultDecider($results, $this->request->amount_of_races))->decide();
        }

        return $aceResults;
    }

    /**
     * Filter through all ace results and remove the zero values from the collection
     */
    private function filterAceResults(Collection $aceResults): Collection
    {
        return $aceResults->filter(function ($value, $key) {
            return $value['coefficient'] != 0;
        });
    }
}
