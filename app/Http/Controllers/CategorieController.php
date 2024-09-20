<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Exception;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategorieController extends Controller
{
    public function index(Request $request)
    {
        $categories = Category::all();
        return Inertia::render('Admin/Categories', [
            'categories' => $categories,
        ]);
    }

    public function create(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:50',
        ]);
        $category = new Category();
        $category->name = $request->name;
        $category->save();

        return Redirect('categories');
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required|string|max:50'
        ]);
        $categorie = Category::find($id);
        $categorie->name = $request->name;

        try {
            $categorie->save();
        } catch (Exception $exception) {
            return Redirect()->back()->withErrors([
                'error' => $exception->getMessage()
            ]);
        }
        return redirect('categories');
    }

    public function destroy($id)
    {
        $category = Category::find($id);
        if ($category) {
            $category->delete();
        }
        return Redirect('categories');
    }
}
