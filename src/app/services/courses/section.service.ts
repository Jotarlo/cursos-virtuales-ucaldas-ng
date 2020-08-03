import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SecurityService } from '../security.service';
import { Observable } from 'rxjs';
import { SectionModel } from '../../models/course/section.model';
import { ServiceConfig } from '../../config/service.config';

@Injectable({
  providedIn: 'root'
})
export class SectionService {

  entity: String = 'section';
  token: String;
  filter: String = '?filter={"include":[{"relation":"course"}]}';

  constructor(private http: HttpClient,
    private securityService: SecurityService) {
    this.token = this.securityService.getToken();
  }

  /**
   * Get all records of section collection
   */
  getAllRecords(): Observable<SectionModel[]> {
    return this.http.get<SectionModel[]>(`${ServiceConfig.BASE_URL}${this.entity}${this.filter}`);
  }

  getRecordById(recordId: String): Observable<SectionModel> {
    return this.http.get<SectionModel>(`${ServiceConfig.BASE_URL}${this.entity}/${recordId}`);
  }

  saveNewRecord(record: SectionModel): Observable<SectionModel> {
    return this.http.post<SectionModel>(`${ServiceConfig.BASE_URL}${this.entity}`, record, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    });
  }

  editRecord(record: SectionModel): Observable<SectionModel> {
    return this.http.put<SectionModel>(`${ServiceConfig.BASE_URL}${this.entity}/${record.id}`, record, {
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
