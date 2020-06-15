<?php

namespace App\Http\Controllers;

use App\Dropzone;

class DropzoneApiController extends Controller
{
    public function getDiscipline(Dropzone $dropzone)
    {
        return response()->json($dropzone->discipline);
    }
}
