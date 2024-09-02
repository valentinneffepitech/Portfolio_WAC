<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Technology;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Inertia\Inertia;

class TechnologieController extends Controller
{
    public function index(Request $request)
    {
        $technologie = Technology::all();
        $categories = Category::all();
        return Inertia::render('Admin/Technologies', [
            'technologies' => $technologie,
            'categories' => $categories,
        ]);
    }

    public function create(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:50',
            'image' => 'nullable|image|mimes:jpg,jpeg,png,gif|max:2048',
            'category' => 'required|exists:categories,id',
        ]);

        $techno = new Technology();
        $techno->name = $request->name;

        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $name = time() . '.' . $image->getClientOriginalExtension();
            $image->move(public_path('uploads'), $name);
            $techno->image = 'uploads/' . $name;
        }

        $categoryId = $request->category;
        $techno->category()->associate($categoryId);

        $techno->save();

        return Redirect('technologies');
    }

    public function edit($id)
    {
        $techno = Technology::find($id);
        $categories = Category::all();
        return Inertia::render('Admin/Technologies/UpdateTechnologie', [
            'technology' => $techno->load('category'),
            'categories' => $categories,
        ]);
    }

    public function update(
        Request $request,
        $id
    ) {
        $request->validate([
            'name' => 'required|string|max:50',
        ]);

        $techno = Technology::find($id);
        $techno->name = $request->name;

        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $name = time() . '.' . $image->getClientOriginalExtension();
            if ($techno->image) {
                File::delete($techno->image);
            }
            $image->move(public_path('uploads'), $name);
            $techno->image = 'uploads/' . $name;
        }

        if (!is_null($request->category)) {
            $categoryId = $request->category;
            $techno->category()->associate($categoryId);
        }

        $techno->save();

        return Redirect('technologies');
    }

    public function destroy($id)
    {
        $techno = Technology::find($id);
        if ($techno->image) {
            File::delete($techno->image);
        }
        $techno->delete();
        return Redirect('technologies');
    }
}
