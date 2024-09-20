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
        $technologies = Technology::all();
        $feedbacks = Feedback::all();
        $projects = Project::all();
        return Inertia::render('Welcome', [
            'categories' => $categories->load('technologies'),
            'technologies' => $technologies->load('projects'),
            'feedbacks' => $feedbacks,
            'projects' => $projects->load('technologies')
        ]);
    }
}
