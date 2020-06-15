<?php

namespace App\Http\Controllers;

use App\Dropzone;
use Illuminate\Http\Request;

class DropzoneController extends Controller
{
    public function index()
    {
        return view('models/dropzone/index')->with('dropzones', Dropzone::all());
    }

    public function create()
    {
        return view('models/dropzone/create');
    }

    public function store(Request $request)
    {
        Dropzone::firstOrCreate([
            'name'       => $request->dropzone_name,
            'distance'   => $request->dropzone_distance,
            'discipline' => $request->dropzone_discipline,
        ]);

        return view('models/dropzone/create')->with([
            'message' => 'Dropzone: ' . $request->dropzone_name . ' added!'
        ]);
    }

    public function edit(Dropzone $dropzone)
    {
        return view('models/dropzone/edit')->with('dropzone', $dropzone);
    }

    public function update(Request $request, Dropzone $dropzone)
    {
        $dropzone->name = $request->dropzone_name;
        $dropzone->distance = $request->dropzone_distance;
        $dropzone->discipline = $request->dropzone_discipline;

        $dropzone->save();

        return redirect()
            ->route('dropzone.edit', $dropzone->id)
            ->with([
                'message' => 'Dropzone: ' . $request->dropzone_name . ' updated!'
            ]);
    }
}
