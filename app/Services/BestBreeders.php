<?php

namespace App\Services;

use App\Pigeon;
use Illuminate\Database\Eloquent\Collection;

class BestBreeders
{
    protected Collection $pigeons;

    protected $weight = [];

    protected Pigeon $currentPigeon; /* Loop variable, gets reset after every iteration */

    protected string $currentParent; /* Loop variable, gets reset after every iteration */

    public function __construct($pigeons)
    {
        $this->pigeons = $pigeons;
    }

    public function getBestBreeders()
    {
        foreach ($this->pigeons as $pigeon) {
            $this->currentPigeon = $pigeon;

            foreach ($pigeon->results as $result) {
                $this->assignWeight($result);
            }
        }

        return $this->weight;
    }

    private function assignWeight($result)
    {
        $parents = ['father', 'mother'];

        foreach ($parents as $parent) {
            $this->currentParent = $parent;

            if ($this->currentPigeon->{$this->currentParent}) {
                $this->ringnumberAlreadyProcessed() ? $this->addWeight(1) : $this->createRingnumberAddWeight(1);

                array_push($this->weight[$this->currentPigeon->{$this->currentParent}->ringnumber]['results'], $result);
            }
        }
    }

    private function ringnumberAlreadyProcessed()
    {
        return array_key_exists($this->currentPigeon->{$this->currentParent}->ringnumber, $this->weight);
    }

    private function addWeight($amount)
    {
        $this->weight[$this->currentPigeon->{$this->currentParent}->ringnumber]['weigth'] += $amount;
    }

    private function createRingnumberAddWeight($amount)
    {
        $this->weight[$this->currentPigeon->{$this->currentParent}->ringnumber] = [
            'pigeon' => $this->currentPigeon->{$this->currentParent},
            'weigth' => $amount
        ];

        $this->weight[$this->currentPigeon->{$this->currentParent}->ringnumber]['results'] = [];
    }
}
