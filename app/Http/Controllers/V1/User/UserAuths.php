<?php

declare(strict_types=1);

namespace App\Http\Controllers\V1\User;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Routing\Controller;

class UserAuths extends Controller
{
    public function userLogin(Request $request)
    {
        //var_dump($request->all());
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Invalid credentials',
                'errors' => $validator->errors()
            ], 422);
        }
        try {
            if (!$token = Auth::attempt($validator->validated())) {
                return response()->json([
                    'success' => false,
                    'message' => 'Invalid credentials',
                ], 401);
            }  //code...
        } catch (\Throwable $th) {
            return response()->json([
                'success' => false,
                'message' =>  $th->message,
            ], 401);
        }

        //  echo    json_encode(["adasd" => "asdas"]);
        // return $this->createNewToken($token);
    }
}
