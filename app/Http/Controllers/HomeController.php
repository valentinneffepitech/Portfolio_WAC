<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Feedback;
use App\Models\Project;
use App\Models\Technology;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    function welcome()
    {
        $categories = Category::with(['technologies.projects'])->get();
        $technologies = Technology::orderBy('updated_at')->get();
        $feedbacks = Feedback::orderBy('updated_at')->get();
        $projects = Project::orderBy('updated_at')->get();
        return Inertia::render('Welcome', [
            'categories' => $categories->load('technologies'),
            'technologies' => $technologies->load('projects'),
            'feedbacks' => $feedbacks,
            'projects' => $projects->load('technologies')
        ]);
    }
}
