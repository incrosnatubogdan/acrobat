<?php

namespace App\Http\Controllers;

use App\Http\Requests\SubscribeUserRequest;
use App\Models\Subscriber;

class UserController extends Controller
{
        /**
     * Create a new subscribption
     *
     * @param \App\Http\Requests\SubscribeUserRequest $request
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function create(SubscribeUserRequest $request)
    {
        $subscriber = new Subscriber();
        $subscriber->fill($request);
        $subscriber->save();
        return response()->json($subscriber);
    }
}
