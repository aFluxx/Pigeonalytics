<?php

namespace App;

use App\Race;
use Illuminate\Database\Eloquent\Model;

class Dropzone extends Model
{
    protected $guarded = [];

    public function races()
    {
        return $this->hasMany(Race::class);
    }
}
