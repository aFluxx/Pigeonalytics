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

    public function father()
    {
        return $this->hasOne(self::class, 'id', 'father_id');
    }

    public function mother()
    {
        return $this->hasOne(self::class, 'id', 'mother_id');
    }

    public function fatherChildren()
    {
        return $this->hasMany(Pigeon::class, 'father_id');
    }

    public function motherChildren()
    {
        return $this->hasMany(Pigeon::class, 'mother_id');
    }

    public function resultsVitesse()
    {
        return $this->hasMany(Result::class)
            ->with('race', 'race.dropzone')
            ->whereHas('race.dropzone', function ($query) {
                $query->whereIn('discipline', ['vit']);
            })
            ->whereHas('race', function ($query) {
                $query->where('type', 'competition');
            });
    }

    public function resultsHalveFond()
    {
        return $this->hasMany(Result::class)
            ->with('race', 'race.dropzone')
            ->whereHas('race.dropzone', function ($query) {
                $query->whereIn('discipline', ['hfo']);
            })
            ->whereHas('race', function ($query) {
                $query->where('type', 'competition');
            });
    }

    public function resultsKleineFond()
    {
        return $this->hasMany(Result::class)
            ->with('race', 'race.dropzone')
            ->whereHas('race.dropzone', function ($query) {
                $query->whereIn('discipline', ['kle']);
            })
            ->whereHas('race', function ($query) {
                $query->where('type', 'competition');
            });
    }

    public function resultsFond()
    {
        return $this->hasMany(Result::class)
            ->with('race', 'race.dropzone')
            ->whereHas('race.dropzone', function ($query) {
                $query->whereIn('discipline', ['fon']);
            })
            ->whereHas('race', function ($query) {
                $query->where('type', 'competition');
            });
    }

    public function resultsGroteFond()
    {
        return $this->hasMany(Result::class)
            ->with('race', 'race.dropzone')
            ->whereHas('race.dropzone', function ($query) {
                $query->whereIn('discipline', ['gfo']);
            })
            ->whereHas('race', function ($query) {
                $query->where('type', 'competition');
            });
    }

    public function resultsTraining()
    {
        return $this->hasMany(Result::class)
            ->with('race', 'race.dropzone')
            ->whereHas('race', function ($query) {
                $query->where('type', 'training');
            });
    }
}
