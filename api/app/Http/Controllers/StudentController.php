<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;

class StudentController
{

    public function index()
    {
        return response()->json(Student::all());
    }

    public function search(Request $request)
    {
        $searchTerm = $request->query('q');
        $filteredStudents = Student::where('firstname', 'like', "%{$searchTerm}%")
            ->orWhere('lastname', 'like', "%{$searchTerm}%")
            ->get();

        return response()->json($filteredStudents);
    }

}
