import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CourseModel } from 'src/app/models/course/course.model';
import { ServiceConfig } from 'src/app/config/service.config';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PublicCourseService {

  entity: String = 'course';
  token: String;
  filter: String = '?filter={"include":[{"relation":"area"},{"relation":"faculty"}]}';

  constructor(private http: HttpClient) {
    
  }

  /**
   * Get all records of course collection
   */
  getAllRecords(): Observable<CourseModel[]> {
    return this.http.get<CourseModel[]>(`${ServiceConfig.BASE_URL}${this.entity}${this.filter}`);
  }
}
