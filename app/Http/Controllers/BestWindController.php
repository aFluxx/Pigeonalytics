<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;

class BestWindController extends Controller
{
    public function index()
    {
        $dd = DB::table('results')
            ->join('races', 'races.id', '=', 'results.race_id')
            ->join('pigeons', 'pigeons.id', '=', 'results.pigeon_id')
            ->where('coefficient_national', '<', 5)
            ->where('races.wind', 'LIKE', '%north%')
            ->select('results.*', 'races.id', 'races.wind', 'pigeons.id', 'pigeons.ringnumber')
            ->get();

        $grouped = $dd->groupBy('ringnumber');

        dd($grouped);
    }
}
