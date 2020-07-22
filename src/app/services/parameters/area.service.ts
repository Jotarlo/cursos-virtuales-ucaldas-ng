import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AreaModel } from '../../models/parameters/area.model';
import { Observable } from 'rxjs';
import { ServiceConfig } from 'src/app/config/service.config';
import { SecurityService } from '../security.service';
@Injectable({
  providedIn: 'root'
})
export class AreaService {

  entity: String = 'area';
  token: String;

  constructor(private http: HttpClient,
    private securityService: SecurityService) {
    this.token = this.securityService.getToken();
  }

  /**
   * Get all records of area collection
   */
  getAllRecords(): Observable<AreaModel[]> {
    return this.http.get<AreaModel[]>(`${ServiceConfig.BASE_URL}${this.entity}`);
  }

  saveNewRecord(record: AreaModel): Observable<AreaModel> {
    return this.http.post<AreaModel>(`${ServiceConfig.BASE_URL}${this.entity}`, record, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    });
  }


}
