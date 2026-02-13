<?php

namespace Database\Seeders;

use App\Models\Student;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        for ($i = 0; $i < 5; $i++) {
            Student::create(
                [
                    'firstname' => fake()->firstName,
                    'lastname'  => fake()->lastName,
                    'email'     => fake()->email,
                    'subject'   => fake()->randomElement(['English', 'Geography', 'Maths', 'Science']),
                    'grade'     => (string)(100 - ($i * 15)),
                ]
            );
        }
    }
}
