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

    public function resultsVit()
    {
        return $this->hasMany(Result::class)
            ->with('race', 'race.dropzone')
            ->whereHas('race.dropzone', function ($query) {
                $query->whereIn('discipline', ['vit', 'hfo']);
            });
    }

    public function resultsFon()
    {
        return $this->hasMany(Result::class)
            ->with('race', 'race.dropzone')
            ->whereHas('race.dropzone', function ($query) {
                $query->whereIn('discipline', ['kle', 'fon', 'gfo']);
            });
    }
}
