<?php

namespace App;

use App\Result;
use Illuminate\Database\Eloquent\Model;

class Pigeon extends Model
{
    protected $guarded = [];

    public function results()
    {
        return $this->hasMany(Result::class);
    }

    public function resultsVitesse()
    {
        return $this->hasMany(Result::class)
            ->with('race', 'race.dropzone')
            ->whereHas('race.dropzone', function ($query) {
                $query->whereIn('discipline', ['vit']);
            });
    }

    public function resultsHalveFond()
    {
        return $this->hasMany(Result::class)
            ->with('race', 'race.dropzone')
            ->whereHas('race.dropzone', function ($query) {
                $query->whereIn('discipline', ['hfo']);
            });
    }

    public function resultsKleineFond()
    {
        return $this->hasMany(Result::class)
            ->with('race', 'race.dropzone')
            ->whereHas('race.dropzone', function ($query) {
                $query->whereIn('discipline', ['kle']);
            });
    }

    public function resultsFond()
    {
        return $this->hasMany(Result::class)
            ->with('race', 'race.dropzone')
            ->whereHas('race.dropzone', function ($query) {
                $query->whereIn('discipline', ['fon', 'gfo']);
            });
    }

    public function resultsGroteFond()
    {
        return $this->hasMany(Result::class)
            ->with('race', 'race.dropzone')
            ->whereHas('race.dropzone', function ($query) {
                $query->whereIn('discipline', ['gfo']);
            });
    }
}
