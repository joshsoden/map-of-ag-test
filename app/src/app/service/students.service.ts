import { Injectable }     from '@angular/core';
import { Observable, of } from "rxjs";
import { Student }        from "./model/student";
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({ providedIn: 'root' })
export class StudentsService {

    constructor(private http: HttpClient) {}

    getStudents(): Observable<Student[]> {
        return this.getAllStudents();
    }

    searchStudents(searchTerm: string): Observable<Student[]> {
        if (searchTerm) {
            let params = new HttpParams();
            params = params.set('q', searchTerm);
            return this.http.get<Student[]>(`${environment.apiBaseUrl}/students/search`,
                {params}
            );
        }

        return this.getAllStudents();
    }

    getAllStudents(): Observable<Student[]> {
        return this.http.get<Student[]>(`${environment.apiBaseUrl}/students/all`);
    }
}
