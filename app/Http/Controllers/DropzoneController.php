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
        $dropzone = new Dropzone([
            'name'      => $request->dropzone_name,
            'distance'  => $request->dropzone_distance,
        ]);

        $dropzone->save();

        return redirect()->route('dropzone.create')->with('success', 'Dropzone added!');
    }
}
