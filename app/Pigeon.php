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
}
