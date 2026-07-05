import { Component } from '@angular/core';
import { type Student } from '../service/model/student';
import { StudentsService } from '../service/students.service';

@Component({
    selector:    'app-students',
    templateUrl: './students.component.html',
    standalone:  false,
})
export class StudentsComponent {
    students: Student[] = [];

    constructor(private studentsService: StudentsService) {}

    ngOnInit(): void {
        this.studentsService.getStudents().subscribe({
            next: (data) => {
                this.students = data;
            },
            error: (err) => {
                console.error("Failed to retrieve students.");
                console.error(err);
            }
        });
    }
}

