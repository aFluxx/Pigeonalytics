<?php

namespace App\Services;

use App\Result;

class ResultPerCoefficientDecider
{
    protected Result $result;

    public function __construct(Result $result)
    {
        $this->result = $result;
        $this->whichCoefficient = 'coefficient_provincial';
    }

    /**
     * Figure out which coefficien to use based on the best value
     *
     * @return mixed
     */
    public function figureOutResultToTake()
    {
        if ($this->isResultValid()) {
            $this->decideWhichCoefficientToTake();

            return round($this->result->{$this->whichCoefficient}, 4);
        }
    }

    /**
     * Make sure we only get valid coefficients and leave out the ones that are set to 1000000
     */
    private function isResultValid(): bool
    {
        return
            $this->result->coefficient_provincial != 1000000.0
            ||
            $this->result->coefficient_zone != 1000000.0
            ||
            $this->result->coefficient_national != 1000000.0;
    }

    /**
     * Algoritm which finds out the best coefficient, current criteria are 'coefficient_provincial', 'coefficient_zone' and 'coefficient_national'
     */
    private function decideWhichCoefficientToTake()
    {
        if ($this->result->coefficient_zone < $this->result->coefficient_provincial) {
            $this->whichCoefficient = 'coefficient_zone';
        }

        if ($this->result->coefficient_national < $this->result->coefficient_zone) {
            $this->whichCoefficient = 'coefficient_national';
        }
    }
}
