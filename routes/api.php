<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/v1/user/register', [App\Http\Controllers\V1\User\Register::class, 'done']);

Route::post('/v1/captcha', [App\Http\Controllers\V1\User\Login::class, 'captcha']);

Route::post('/v1/user/auth', [App\Http\Controllers\V1\User\UserAuths::class, 'userLogin']);

Route::post('/v1/user/refreshToken', [App\Http\Controllers\V1\User\UserAuths::class, 'createNewToken']);
