<?php

use App\Http\Controllers\CategorieController;
use App\Http\Controllers\FeedbackController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\TechnologieController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [HomeController::class, 'welcome'])->name('home');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    //* GET Routes

    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    Route::get('/user/create', [
        UserController::class,
        'create'
    ])->name('register.user');

    Route::get('/projects', [
        ProjectController::class,
        'index'
    ])->name('projects');

    Route::get('/project/edit/{id}', [
        ProjectController::class,
        'edit'
    ])->name('project.edit');

    Route::get('/categories', [
        CategorieController::class,
        'index'
    ])->name('categories');

    Route::get('/technologies', [
        TechnologieController::class,
        'index'
    ])->name('technologies');

    Route::get('/technologie/edit/{id}', [
        TechnologieController::class,
        'edit'
    ])->name('techno.edit');

    Route::get('/feedbacks', [
        FeedbackController::class,
        'index'
    ])->name('feedbacks');

    Route::get('/feedback/edit/{id}', [
        FeedbackController::class,
        'edit'
    ])->name('feedback.edit');

    //* POST Routes
    Route::post('/project/create', [
        ProjectController::class,
        'create'
    ])->name('project.new');

    Route::post('/category/create', [
        CategorieController::class,
        'create'
    ])->name('category.new');

    Route::post('/techno/create', [
        TechnologieController::class,
        'create'
    ])->name('techno.new');

    Route::post('/feedback/new', [
        FeedbackController::class,
        'create'
    ])->name('feedback.new');

    //* Methode POST (Bug passage Image méthode PUT)
    Route::post('/project/update/{id}', [
        ProjectController::class,
        'update'
    ])->name('project.update');

    Route::post('/techno/update/{id}', [
        TechnologieController::class,
        'update'
    ])->name('technologies.update');

    //* PUT Routes
    Route::put('/category/update/{id}', [
        CategorieController::class,
        'update'
    ])->name('categorie.update');

    Route::put('/project/technologies', [
        ProjectController::class,
        'updateTechno'
    ])->name('project.technos');

    Route::put('/feedback/update', [
        FeedbackController::class,
        'update'
    ])->name('feedback.update');

    //* DELETE Routes
    Route::delete('/project/delete/{id}', [
        ProjectController::class,
        'destroy'
    ])->name('project.delete');

    Route::delete('/user/delete/{id}', [
        UserController::class,
        'destroy'
    ])->name('user.delete');

    Route::delete('/category/delete/{id}', [
        CategorieController::class,
        'destroy'
    ])->name('categorie.delete');

    Route::delete('/techno/delete/{id}', [
        TechnologieController::class,
        'destroy'
    ])->name('technologies.delete');

    Route::delete('/feedback/delete/{id}', [
        FeedbackController::class,
        'destroy'
    ])->name('feedback.delete');
});

require __DIR__ . '/auth.php';
