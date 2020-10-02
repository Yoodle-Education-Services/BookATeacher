import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Teacher, Review } from './teacher';


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
  public getTeacherById(teacherId: string): Promise<Teacher> {
    const url: string = `${this.apiBaseUrl}/teachers/${teacherId}`;
    return this.http
      .get(url)
      .toPromise()
      .then(response => response as Teacher)
      .catch(this.handleError);
  }

  public addReviewByTeacherId(teacherId: string, formData: Review): Promise<Review> {
    const url: string = `${this.apiBaseUrl}/teachers/${teacherId}/reviews`;
    return this.http
      .post(url, formData)
      .toPromise()
      .then(response => response as any)
      .catch(this.handleError);
  }

  /*public getCalendarByTeacherId(teacherId: string): Promise<Calendar[]> {
    const url: string = `${this.apiBaseUrl}/teachers/${teacherId}/calendar`;
    return this.http
      .get(url)
      .toPromise()
      .then(response => response as Calendar[])
      .catch(this.handleError);
  }*/

  private handleError(error: any) : Promise<any> {
    console.error('Something has gone wrong', error);
    return Promise.reject(error.message || error);
  }
}
