<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group([
    'prefix'     => 'v1',
    'middleware' => '',
    'namespace'  => 'Api',
    'as'         => 'api.',
], function () {

    Route::group([
        'prefix' => 'pay',
        'as'     => 'pay.',
    ], function () {

        Route::post('purchase', [
            'uses' => 'PaymentController@purchase',
            'as'   => 'purchase'
        ]);
    });

    Route::group([
        'prefix' => 'subscribe',
        'as'     => 'subscribe.',
    ], function () {

        Route::post('create', [
            'uses' => 'UserController@create',
            'as'   => 'create'
        ]);
        
    });

});
