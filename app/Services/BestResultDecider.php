<?php

namespace App\Services;

use App\Services\ResultPerCoefficientDecider;
use Illuminate\Support\Collection;

class BestResultDecider
{
    protected Collection $results;

    protected int $amountOfRaces;

    private array $calculated;

    public function __construct(Collection $results, int $amountOfRaces)
    {
        $this->results = $results;
        $this->amountOfRaces = $amountOfRaces;

        $this->calculated = [];
    }

    /**
     * Decide the best results according to the given criteria and return an array containing:
     * 'pigeon_id', 'ringnumber', 'coefficient' and 'amountOfRacesWithValidCoefficient'
     */
    public function decide(): array
    {
        $this->startMetaData();

        $coeffsToWorkWith = collect();

        $this->results->each(function ($result, $key) use ($coeffsToWorkWith) {
            $result = (new ResultPerCoefficientDecider($result))->figureOutResultToTake();

            // Only if the result contains an actual coefficient add it to the collection
            if ($result != null) {
                $coeffsToWorkWith[] = $result;
            }
        });

        $this->finishMetatData($coeffsToWorkWith);

        return $this->calculated;
    }

    /**
     * Start building the metadata array
     * This part builds adds a 'pigeon_id' and 'ringnumber' to the meta data array
     */
    private function startMetaData(): void
    {
        $this->calculated['pigeon_id'] = $this->results->first()->pigeon->id;
        $this->calculated['ringnumber'] = $this->results->first()->pigeon->ringnumber;
    }

    /**
     * Finish building the metadata array
     * This part builds adds a 'coefficient' and 'amountOfRacesWithValidCoefficient' to the meta data array
     */
    private function finishMetatData($coeffsToWorkWith): void
    {
        $calculatedCoefficient = $this->sumUpApplicableCoefficients($coeffsToWorkWith);

        $this->calculated['coefficient'] = $calculatedCoefficient;
        $this->calculated['amountOfRacesWithValidCoefficient'] = $coeffsToWorkWith->sort()->take($this->amountOfRaces)->count();
    }

    /**
     * Goes through the return results, sort them ascending on value takes the amount of races and sums this up
     */
    private function sumUpApplicableCoefficients($coeffsToWorkWith): float
    {
        return $coeffsToWorkWith->sort()->take($this->amountOfRaces)->sum();
    }
}
