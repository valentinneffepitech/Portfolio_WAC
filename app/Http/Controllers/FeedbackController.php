<?php

namespace App\Http\Controllers;

use App\Models\Feedback;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FeedbackController extends Controller
{
    function index()
    {
        $feedbacks = Feedback::all();
        return Inertia::render('Admin/Feedback', [
            'feedbacks' => $feedbacks
        ]);
    }

    function create(Request $request)
    {
        $request->validate([
            'author' => 'required|string|max:50',
            'role' => 'required|string|max:255',
            'content' => 'required',
        ]);

        $feedback = new Feedback();
        $feedback->author = $request->author;
        $feedback->role = $request->role;
        $feedback->content = $request->content;
        $feedback->save();

        return Redirect('feedbacks');
    }

    function edit($id)
    {
        $feedback = Feedback::find($id);
        return Inertia::render('Admin/Feedbacks/Edit', [
            'feedback' => $feedback
        ]);
    }

    function update(Request $request)
    {
        $request->validate([
            'author' => 'required|string|max:255',
            'role' => 'required|string|max:255',
            'content' => 'required'
        ]);
        $feedback = Feedback::find($request->id);
        $feedback->author = $request->author;
        $feedback->role = $request->role;
        $feedback->content = $request->content;
        $feedback->save();

        return redirect('feedbacks');
    }

    function destroy($id)
    {
        $feedback = Feedback::find($id);
        if ($feedback) {
            $feedback->delete();
        }
        return redirect('feedbacks');
    }
}
