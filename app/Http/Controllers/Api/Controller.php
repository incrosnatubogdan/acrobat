<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;

use Netopia\Payment\Address;
use Netopia\Payment\Invoice;
use Netopia\Payment\Request\Card;

class PaymentController extends Controller
{
    /**
     * Search and get all users
     *
     * can be query
     *
     * @param \Illuminate\Http\Request $request
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function purchase(Request $request)
    {
        dd($request);
    }
}
