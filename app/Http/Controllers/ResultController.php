<?php

namespace App\Http\Controllers;

use App\Result;
use Illuminate\Http\Request;

class ResultController extends Controller
{
    public function index()
    {
        return view('models/result/index')->with('results', Result::all());
    }
}
