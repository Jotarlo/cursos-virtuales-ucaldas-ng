import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SecurityService } from '../security.service';
import { Observable } from 'rxjs';
import { CourseModel } from 'src/app/models/course/course.model';
import { ServiceConfig } from 'src/app/config/service.config';
import { UploadFileModel } from '../../models/upload/upload.model';
@Injectable({
  providedIn: 'root'
})
export class CourseService {

  entity: String = 'course';
  token: String;
  filter: String = '?filter={"include":[{"relation":"area"},{"relation":"faculty"}]}';

  constructor(private http: HttpClient,
    private securityService: SecurityService) {
    this.token = this.securityService.getToken();
  }

  /**
   * Get all records of course collection
   */
  getAllRecords(): Observable<CourseModel[]> {
    return this.http.get<CourseModel[]>(`${ServiceConfig.BASE_URL}${this.entity}${this.filter}`);
  }

  getRecordById(recordId: String): Observable<CourseModel> {
    return this.http.get<CourseModel>(`${ServiceConfig.BASE_URL}${this.entity}/${recordId}`);
  }

  saveNewRecord(record: CourseModel): Observable<CourseModel> {
    return this.http.post<CourseModel>(`${ServiceConfig.BASE_URL}${this.entity}`, record, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    });
  }

  editRecord(record: CourseModel): Observable<CourseModel> {
    return this.http.put<CourseModel>(`${ServiceConfig.BASE_URL}${this.entity}/${record.id}`, record, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    });
  }

  removeRecord(recordId: String): Observable<any> {
    return this.http.delete<any>(`${ServiceConfig.BASE_URL}${this.entity}/${recordId}`, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    });
  }

  uploadImage(formData): Observable<UploadFileModel> {
    return this.http.post<UploadFileModel>(`${ServiceConfig.BASE_URL}courseImage`, formData, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    });
  }

}
