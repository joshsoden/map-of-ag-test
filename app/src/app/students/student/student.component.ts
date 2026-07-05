import { Component, Input } from '@angular/core';
import { type Student } from '../../service/model/student';

@Component({
  // selector: 'app-student',
  selector: 'tr[app-student]',
  templateUrl: './student.component.html',
  styleUrl: './student.component.css',
  standalone: false,
})

export class StudentComponent {
  @Input() student!: Student
}
