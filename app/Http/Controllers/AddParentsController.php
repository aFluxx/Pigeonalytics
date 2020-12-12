<?php

namespace App\Http\Controllers;

use App\Pigeon;
use Illuminate\Http\Request;

class AddParentsController extends Controller
{
    public function index()
    {
        $pigeons = Pigeon::where('ringnumber_father', null)->orWhere('ringnumber_mother', null)->get();

        return view('models.pigeon.add-parents.index')->with('pigeons', $pigeons);
    }

    public function edit(Pigeon $pigeon)
    {
        $pigeons = Pigeon::all();

        return view('models.pigeon.add-parents.edit')->with([
            'pigeon' => $pigeon,
            'pigeons' => $pigeons
        ]);
    }

    public function store(Request $request, Pigeon $pigeon)
    {
        $father = Pigeon::where('ringnumber', $request->father)->first();
        $mother = Pigeon::where('ringnumber', $request->mother)->first();

        $pigeon->update([
            'ringnumber_father' => $father->ringnumber,
            'father_id' => $father->id,
            'ringnumber_mother' => $mother->ringnumber,
            'mother_id' => $mother->id,
        ]);

        return response()->json('pigeon updated', 200);
    }
}
