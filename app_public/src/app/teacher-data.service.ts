import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Teacher } from './teacher-list/teacher-list.component';


@Injectable({
  providedIn: 'root'
})
export class TeacherDataService {

  constructor(private http: HttpClient) { }

  private apiBaseUrl = 'http://localhost:3000/api';

  public getTeachers(): Promise<Teacher[]> {
    const url: string = `${this.apiBaseUrl}/teachers`;
    return this.http
      .get(url)
      .toPromise()
      .then(response => response as Teacher[])
      .catch(this.handleError);
  }
  private handleError(error: any) : Promise<any> {
    console.error('Something has gone wrong', error);
    return Promise.reject(error.message || error);
  }
}
