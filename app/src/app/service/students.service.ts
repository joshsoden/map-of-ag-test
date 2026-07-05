import { Injectable }     from '@angular/core';
import { Observable, of } from "rxjs";
import { Student }        from "./model/student";
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({ providedIn: 'root' })
export class StudentsService {

    constructor(private http: HttpClient) {}

    getStudents(): Observable<Student[]> {
        return this.http.get<Student[]>(`${environment.apiBaseUrl}/students`);
    }
}
