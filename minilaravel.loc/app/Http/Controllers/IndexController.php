<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class IndexController extends Controller
{
    public function index(){
        $message = 'Hi man';
        return view ('page')->with('message', $message);
    }
}
