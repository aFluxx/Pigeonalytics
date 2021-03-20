<?php

namespace App\Services;

use App\Pigeon;
use Exception;

class CurrentParent
{
    protected Pigeon $currentPigeon;

    public string $currentRingnumber;

    public string $currentParent;

    public function __construct($pigeon, $parent)
    {
        $this->currentPigeon = $pigeon;
        $this->parent = $parent;
    }

    public function hasValidParent()
    {
        if ($this->currentParent) {
            return true;
        }
    }

    public function getCurrentParent()
    {
        return $this->currentPigeon->{$this->parent};
    }

    public function getCurrentParentRingnumber()
    {
        if (!$this->currentPigeon->{$this->parent}) {
            throw new Exception("The given pigeon has no parent of type {$this->parent}");
        }

        return $this->currentPigeon->{$this->parent}->ringnumber;
    }
}
