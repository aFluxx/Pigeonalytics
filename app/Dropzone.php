<?php

namespace App;

use App\Race;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Session;

class Dropzone extends Model
{
    protected $guarded = [];

    public static function boot()
    {
        parent::boot();

        self::saved(function ($dropzone) {
            $count = '';
            if ($dropzone->isDirty('distance')) {
                foreach ($dropzone->races as $race) {
                    foreach ($race->results as $result) {
                        $result->mpm = $dropzone->getDirty()["distance"] / $result->interval;
                        $result->save();
                        $count++;
                    }
                }
                Session::flash('message', 'Dropzone updated succesfully, also updated the mpm of ' . $count . ' results.');
            }
        });
    }

    public function races()
    {
        return $this->hasMany(Race::class);
    }
}
