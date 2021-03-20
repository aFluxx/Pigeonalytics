<?php

namespace App\Services;

use App\Result;
use App\Services\CurrentParent;
use Exception;
use Illuminate\Database\Eloquent\Collection;

class BestBreeders
{
    protected Collection $pigeons;

    protected array $weight = [];

    protected int $threshold;

    protected string $whichCoefficient;

    public function __construct(Collection $pigeons)
    {
        $this->pigeons = $pigeons;
        $this->threshold = 0;
        $this->whichCoefficient = '';
    }

    public function setThreshold(int $threshold)
    {
        $this->threshold = $threshold;
    }

    public function setCoefficient(string $whichCoefficient)
    {
        $this->whichCoefficient = $whichCoefficient;
    }

    /**
     * Retrieve a sorted list of best breeders from a Pigeon Collection
     */
    public function getBestBreeders(): array
    {
        if ($this->threshold == 0) {
            throw new Exception('Please set a threshold before running this method');
        }

        if ($this->whichCoefficient == '') {
            throw new Exception('Please set a coefficeint before running this method');
        }

        foreach ($this->pigeons as $pigeon) {
            $this->currentPigeon = $pigeon;

            foreach ($pigeon->results as $result) {
                $this->assignWeight($result, $pigeon);
            }
        }

        return $this->weight;
    }

    /**
     * Loop over every parent and assign a weight for every result
     */
    private function assignWeight(Result $result, $pigeon): void
    {
        $parents = ['father', 'mother'];
        $weightAmount = (new WeightDecider($this->threshold, $this->whichCoefficient, $result))->decideWeight();

        foreach ($parents as $parent) {
            $currentParent = new CurrentParent($pigeon, $parent);

            if ($currentParent->getCurrentParent()) {
                $this->ringnumberAlreadyProcessed($currentParent) ?
                    $this->addWeight($currentParent, $weightAmount) :
                    $this->createRingnumberAddWeight($currentParent, $weightAmount);

                array_push($this->weight[$currentParent->getCurrentParentRingnumber()]['results'], $result);
            }
        }
    }

    /**
     * Check to see if a ringnumber is already processed and added to the array
     */
    private function ringnumberAlreadyProcessed(CurrentParent $currentParent): bool
    {
        return array_key_exists($currentParent->getCurrentParentRingnumber(), $this->weight);
    }

    /**
     * Add a weighting to a ringnumber when a ringnumber is already present in the output array
     */
    private function addWeight(CurrentParent $currentParent, int $amount): void
    {
        $this->weight[$currentParent->getCurrentParentRingnumber()]['weigth'] += $amount;
    }

    /**
     * Create a ringnumber and add a weighting when a ringnumber is not yet present in the output array
     */
    private function createRingnumberAddWeight(CurrentParent $currentParent, int $amount): void
    {
        $this->weight[$currentParent->getCurrentParentRingnumber()] = [
            'pigeon' => $currentParent->getCurrentParent(),
            'weigth' => $amount
        ];

        $this->weight[$currentParent->getCurrentParentRingnumber()]['results'] = [];
    }
}
