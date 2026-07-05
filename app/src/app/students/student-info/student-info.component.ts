import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type Student } from '../../service/model/student';

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrl: './student-info.component.css',
  standalone: false,
})

export class StudentInfoComponent {
  @Input() student!: Student;
  @Output() closePopup = new EventEmitter<void>();

  onClosePopup() {
    this.closePopup.emit();
  }
}
