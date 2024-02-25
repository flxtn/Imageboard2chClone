<?php

use App\Http\Controllers\DesksController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ThreadsController;
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

    Route::get('/desks', [DesksController::class, 'index']);
    Route::get('/{desk}', [DesksController::class, 'current']);
    
    Route::post('/{desk}/thread', [PostController::class, 'postThread']);
    Route::get('/{desk}/thread', [ThreadsController::class, 'index']);
    
    Route::get('/thread/{thread}', [ThreadsController::class, 'getThread']);
    Route::post('/{desk}/{thread}', [PostController::class, 'postInThread']);



