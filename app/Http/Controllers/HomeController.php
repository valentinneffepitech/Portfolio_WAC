<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Technology;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    function welcome()
    {
        $categories = Category::with(['technologies.projects'])->get();
        $technologies = Technology::all();
        return Inertia::render('Welcome', [
            'categories' => $categories->load('technologies'),
            'technologies' => $technologies->load('projects')
        ]);
    }
}
