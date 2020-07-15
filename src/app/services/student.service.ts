import { Injectable } from '@angular/core';
import { StudentModel } from '../models/student.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServiceConfig } from '../config/service.config';


@Injectable({
  providedIn: 'root'
})
export class StudentService {
  entity: String = 'student';

  constructor(
    private http: HttpClient
  ) { }

  StudentRegister(model: StudentModel): Observable<StudentModel> {
    return this.http.post<StudentModel>(`${ServiceConfig.BASE_URL}${this.entity}`, model, {
      headers: new HttpHeaders({

      })
    })
  }

}
