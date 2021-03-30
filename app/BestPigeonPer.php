<?php

namespace App;

use App\Result;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Collection;

class BestPigeonPer extends Model
{
    public string $whichCoefficient;

    public int $pigeonId;

    public string $ringnumber;

    public float $avgCoefficient;

    public int $amountOfRacesThatCount;

    public Collection $results;

    public function __construct(string $whichCoefficient)
    {
        $this->whichCoefficient = $whichCoefficient;

        $this->avgCoefficient = 0.0;
        $this->amountOfRacesThatCount = 0;
        $this->results = collect();
    }

    public function setPigeonId(int $pigeonId)
    {
        $this->pigeonId = $pigeonId;
    }

    public function setPigeonRingnumber(string $ringnumber)
    {
        $this->ringnumber = $ringnumber;
    }

    public function setResult(Result $result)
    {
        if ($result->{$this->whichCoefficient} == 1000000 || $result->{$this->whichCoefficient} == 1000000.0) {
            return;
        }

        $this->results->push($result);
    }

    public function calculateAvgCoefficient()
    {
        $coefficientTotal = 0;

        foreach ($this->results as $result) {
            $coefficientTotal += $result->{$this->whichCoefficient};
        }

        if ($this->results->count() > 0) {
            $this->avgCoefficient = $coefficientTotal / $this->results->count();
        }
    }

    public function setAmountOfRaces()
    {
        $this->amountOfRacesThatCount = $this->results->count();
    }

    /**
     * Convert the model instance to an array.
     *
     * @return array
     */
    public function toArray()
    {
        return $this->generateAttributes();
    }

    private function generateAttributes()
    {
        return [
            "whichCoefficient" => $this->whichCoefficient,
            "pigeonId" => $this->pigeonId,
            "ringnumber" => $this->ringnumber,
            "avgCoefficient" => $this->avgCoefficient,
            "amountOfRacesThatCount" => $this->amountOfRacesThatCount,
            "results" => $this->results,
        ];
    }
}
