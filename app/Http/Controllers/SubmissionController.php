<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Mail;
use App\Mail\ContactMail;
use Illuminate\Http\Request;

class SubmissionController extends Controller
{
    public function index(Request $request)
    {
        $fields = [
            'message',
            'name',
            'email'
        ];

        foreach ($fields as $field) {
            if (!$request->has($field)) {
                return response()->json([
                    "status" => 'ko',
                    "code" => 400,
                    "error" => "Missing : $field"
                ]);
            }
        }

        Mail::to(env('MAIL_TO_NOTIFY'))->send(new ContactMail([
            'message' => htmlspecialchars($request->message),
            'name' => htmlspecialchars($request->name),
            'email' => htmlspecialchars($request->email)
        ]));

        return response()->json([
            "status" => 'ok',
            "code" => 200,
            'message' => $request->message
        ]);
    }
}
