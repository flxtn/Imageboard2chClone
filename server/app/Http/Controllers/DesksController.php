<?php

namespace App\Http\Controllers;

use App\Models\Desk;
use Illuminate\Http\Request;

class DesksController extends Controller
{
    public function index(){
        $desks = Desk::all();
        return response(['desks' => $desks], 200);
    }

    public function current($desk){
        $currentDesk = Desk::where('tag', $desk)->first();
        return response (['desk' => $currentDesk], 200);
    }
}
