import { HttpClientModule } from "@angular/common/http";
import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';

import { AppRoutingModule }  from './app-routing.module';
import { AppComponent }      from './app.component';
import { StudentsComponent } from './students/students.component';
import { StudentComponent } from './students/student/student.component';
import { StudentInfoComponent } from "./students/student-info/student-info.component";
import { SearchComponent } from "./students/search/search.component";

@NgModule({
    declarations: [
        AppComponent,
        StudentsComponent,
        StudentComponent,
        StudentInfoComponent,
    ],
    imports:      [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        SearchComponent,
    ],
    providers:    [],
    bootstrap:    [ AppComponent ],
})

export class AppModule {}
