<?php

namespace App\Http\Controllers;

use App\Pigeon;
use Illuminate\Http\Request;

class PigeonController extends Controller
{
    public function index()
    {
        return view('models/pigeon/index')->with('pigeons', Pigeon::all());
    }

    public function show(Pigeon $pigeon)
    {
        return view('models/pigeon/show')->with([
            'pigeon' => $pigeon,
            'results' => $pigeon->results,
        ]);
    }
}
