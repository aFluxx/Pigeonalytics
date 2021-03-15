<?php

namespace App\Services;

use App\Pigeon;
use App\Result;
use Illuminate\Database\Eloquent\Collection;

class BestBreeders
{
    protected Collection $pigeons;

    protected array $weight = [];

    protected int $threshold;

    protected string $whichCoefficient;

    /* Loop variables
     * these get reset after every iteration */
    protected Pigeon $currentPigeon;

    protected string $currentRingnumber;

    protected string $currentParent;

    public function __construct(Collection $pigeons, int $threshold, string $whichCoefficient)
    {
        $this->pigeons = $pigeons;
        $this->threshold = $threshold;
        $this->whichCoefficient = $whichCoefficient;
    }

    /**
     * Retrieve a sorted list of best breeders from a Pigeon Collection
     */
    public function getBestBreeders(): array
    {
        foreach ($this->pigeons as $pigeon) {
            $this->currentPigeon = $pigeon;

            foreach ($pigeon->results as $result) {
                $this->assignWeight($result);
            }
        }

        return $this->weight;
    }

    /**
     * Loop over every parent and assign a weight for every result
     */
    private function assignWeight(Result $result): void
    {
        $parents = ['father', 'mother'];
        $weight = (new WeightDecider($this->threshold, $this->whichCoefficient, $result))->decideWeight();

        foreach ($parents as $parent) {
            $this->currentParent = $parent;

            if ($this->currentPigeon->{$this->currentParent}) {
                $this->currentRingnumber = $this->currentPigeon->{$this->currentParent}->ringnumber;
                $this->ringnumberAlreadyProcessed() ? $this->addWeight($weight) : $this->createRingnumberAddWeight($weight);

                array_push($this->weight[$this->currentRingnumber]['results'], $result);
            }
        }
    }

    /**
     * Check to see if a ringnumber is already processed and added to the array
     */
    private function ringnumberAlreadyProcessed(): bool
    {
        return array_key_exists($this->currentRingnumber, $this->weight);
    }

    /**
     * Add a weighting to a ringnumber when a ringnumber is already present in the output array
     */
    private function addWeight(int $amount): void
    {
        $this->weight[$this->currentRingnumber]['weigth'] += $amount;
    }

    /**
     * Create a ringnumber and add a weighting when a ringnumber is not yet present in the output array
     */
    private function createRingnumberAddWeight(int $amount): void
    {
        $this->weight[$this->currentRingnumber] = [
            'pigeon' => $this->currentPigeon->{$this->currentParent},
            'weigth' => $amount
        ];

        $this->weight[$this->currentRingnumber]['results'] = [];
    }
}
