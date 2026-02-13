<?php

use Illuminate\Support\Facades\Route;

Route::get('students', [\App\Http\Controllers\StudentController::class, 'index'])->name('students.index');
