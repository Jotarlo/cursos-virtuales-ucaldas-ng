import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserModel } from '../models/user.model';
import { Observable } from 'rxjs';
import { ServiceConfig } from '../config/service.config';


@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  constructor(
    private http: HttpClient
  ) { }

  LoginUser(model: UserModel): Observable<UserModel> {
    return this.http.post<UserModel>(`${ServiceConfig.BASE_URL}login`, model, {
      headers: new HttpHeaders({
      })
    })
  }
}
