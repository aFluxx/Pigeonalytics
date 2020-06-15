<?php

namespace App\Http\Controllers;

use App\Pigeon;

class PigeonController extends Controller
{
    public function index()
    {
        return view('models/pigeon/index')->with('pigeons', Pigeon::withCount('results')->get());
    }

    public function show(Pigeon $pigeon)
    {
        return view('models/pigeon/show')->with([
            'pigeon' => $pigeon,
            'results' => $pigeon->results,
        ]);
    }
}
