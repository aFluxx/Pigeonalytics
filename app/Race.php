<?php

namespace App;

use App\Dropzone;
use App\Result;
use Illuminate\Database\Eloquent\Model;

class Race extends Model
{
    /**
     * The relationships that should always be loaded.
     *
     * @var array
     */
    protected $with = ['dropzone'];

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
