<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\Technology;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Inertia\Inertia;

class ProjectController extends Controller
{
    public function index(Request $request)
    {
        $projects = Project::with('technologies')->get();
        return Inertia::render("Admin/Projects", [
            "projects" => $projects,
        ]);
    }

    public function create(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:50',
            'description' => 'required|string|max:255',
            'image' => 'nullable|image|mimes:jpg,jpeg,png,gif|max:2048',
        ]);

        $project = new Project();
        $project->name = $request->name;
        $project->description = $request->description;
        $project->save();

        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $name = time() . '.' . $image->getClientOriginalExtension();
            $image->move(public_path('uploads'), $name);
            $project->image = 'uploads/' . $name;
            $project->save();
        }

        return Redirect('projects');
    }

    public function edit($id)
    {
        $project = Project::with('technologies')->find($id);
        $technologies = Technology::all();
        return Inertia::render("Admin/Projects/UpdateProject", [
            "project" => $project,
            "technologies" => $technologies,
        ]);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'nullable|string|max:255',
            'description' => 'nullable|string'
        ]);
        $project = Project::find($id);
        $project->name = $request->has('name') ? $request->name : $project->name;
        $project->description = $request->has('description') ? $request->description : $project->description;
        try {
            $project->save();
        } catch (\Illuminate\Database\QueryException $e) {
            return Redirect()->back()->withErrors(['error' => $e->getMessage()]);
        }
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $name = time() . '.' . $image->getClientOriginalExtension();
            $image->move(public_path('uploads'), $name);
            if ($project->image) {
                File::delete($project->image);
            }
            $project->image = 'uploads/' . $name;
            $project->save();
        }
        return Redirect('projects');
    }

    public function updateTechno(Request $request)
    {
        $project = Project::find($request->id);
        $project->technologies()->sync($request->technologies);
        return Redirect('projects');
    }

    public function destroy(
        $id
    ) {
        $project = Project::find($id);
        if ($project) {
            File::delete($project->image);
            $project->delete();
        }
        return Redirect('projects');
    }
}
