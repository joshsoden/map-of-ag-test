import { Component } from '@angular/core';
import { type Student } from '../service/model/student';
import { StudentsService } from '../service/students.service';

@Component({
    selector:    'app-students',
    templateUrl: './students.component.html',
    styleUrls: ['./students.component.css'],
    standalone:  false,
})
export class StudentsComponent {
    public students: Student[] = [];
    public isDisplaying:boolean = false;
    public selectedStudent?: Student = undefined;

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

    displayStudent(id:string | number) {
        this.isDisplaying = true;
        this.selectedStudent = this.students.find((s) => String(s.id) === String(id));
    }

    onClosePopup() {
        this.isDisplaying = false;
        this.selectedStudent = undefined;
    }
}

