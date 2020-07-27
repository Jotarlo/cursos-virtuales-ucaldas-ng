import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FacultyModel } from '../../models/parameters/faculty.model';
import { Observable } from 'rxjs';
import { ServiceConfig } from 'src/app/config/service.config';
import { SecurityService } from '../security.service';
@Injectable({
  providedIn: 'root'
})
export class FacultyService {

  entity: String = 'faculty';
  token: String;

  constructor(private http: HttpClient,
    private securityService: SecurityService) {
    this.token = this.securityService.getToken();
  }

  /**
   * Get all records of Faculty collection
   */
  getAllRecords(): Observable<FacultyModel[]> {
    return this.http.get<FacultyModel[]>(`${ServiceConfig.BASE_URL}${this.entity}`);
  }

  /**
   * get data of a record by id
   * @param recordId id of record to search
   */
  getRecordById(recordId: String): Observable<FacultyModel> {
    return this.http.get<FacultyModel>(`${ServiceConfig.BASE_URL}${this.entity}/${recordId}`);
  }

  /**
   * save a new record
   * @param record record data to save
   */
  saveNewRecord(record: FacultyModel): Observable<FacultyModel> {
    return this.http.post<FacultyModel>(`${ServiceConfig.BASE_URL}${this.entity}`, record, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    });
  }

  editRecord(record: FacultyModel): Observable<FacultyModel> {
    return this.http.put<FacultyModel>(`${ServiceConfig.BASE_URL}${this.entity}/${record.id}`, record, {
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

}
