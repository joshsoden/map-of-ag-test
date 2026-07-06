<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\StudentController;

Route::get('/students/all', [StudentController::class, 'index'])->name('students.index');

Route::get('/students/search', [StudentController::class, 'search'])->name('students.search');