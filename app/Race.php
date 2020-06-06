<?php

namespace App;

use App\Dropzone;
use App\Result;
use Illuminate\Database\Eloquent\Model;

class Race extends Model
{
    protected $guarded = [];

    public function dropzone()
    {
        return $this->belongsTo(Dropzone::class);
    }

    public function results()
    {
        return $this->hasMany(Result::class);
    }
}
