<?php

namespace App\Http\Controllers\V1\User;

use App\Http\Controllers\Controller;
//use Illuminate\Http\Request;
use  App\Http\Requests\V1\User\Register as Request;

class Register extends Controller
{
    function done(Request $request)
    {

        return response()->json(['suc', 'welcome']);
    }
}
