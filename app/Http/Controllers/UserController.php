<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function create(Request $request)
    {
        return Inertia::render('Auth/Register', [
            'user' => auth()->user(),
            'admins' => User::all()
        ]);
    }

    public function destroy($id)
    {
        $user = User::find($id);
        $user->delete();

        return Inertia::render('Auth/Register', [
            'user' => auth()->user(),
            'admins' => User::all()
        ]);
    }
}
