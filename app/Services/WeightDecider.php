<?php

namespace App\Services;

use App\Result;
use ReflectionClass;

class WeightDecider
{
    const WEIGHT_ONE = 500;
    const WEIGHT_TWO = 250;
    const WEIGHT_THREE = 100;
    const WEIGHT_FOUR = 75;
    const WEIGHT_FIVE = 50;

    protected int $threshold;

    protected string $whichCoefficient;

    protected Result $result;

    protected array $applicableWeightings = [];

    public function __construct(int $threshold, string $whichCoefficient, Result $result)
    {
        $this->threshold = $threshold;
        $this->whichCoefficient = $whichCoefficient;
        $this->result = $result;

        $this->setApplicableWeightings();
    }

    /**
     * Retrieve the applicable weighing
     */
    public function decideWeight(): int
    {
        $coefficient = $this->result->{$this->whichCoefficient};
        $closest = $this->getClosest($coefficient, $this->applicableWeightings);
        $key = array_search($closest, $this->applicableWeightings);

        return array_reverse($this->applicableWeightings)[$key];
    }

    /**
     * Bind the applicable weightings to the class
     */
    private function setApplicableWeightings(): void
    {
        foreach ($this->getConstants() as $weighting) {
            $this->applicableWeightings[] = round($weighting / $this->threshold, 0);
        }
    }

    /**
     * Retrieve a list of all class constant
     */
    private function getConstants(): array
    {
        $oClass = new ReflectionClass(__CLASS__);
        return $oClass->getConstants();
    }

    /**
     * Search through an array to get the closest numerical value
     */
    private function getClosest(int $search, array $arr): int
    {
        $closest = null;

        foreach ($arr as $item) {
            if ($closest === null || abs($search - $closest) > abs($item - $search)) {
                $closest = $item;
            }
        }

        return $closest;
    }
}
