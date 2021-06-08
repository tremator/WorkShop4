import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const AUTH_API = 'https://localhost:5001/api/course/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ApiConnectionService {

  constructor(private http: HttpClient) { }

  getCourses(){
    return this.http.get(AUTH_API);
  }
  getCourse(id: number){
    return this.http.get(AUTH_API + id);
  }
  postCourse(course: any){
    return this.http.post(AUTH_API, course ,httpOptions)
  }
  patchCourse(id: number,course: any){
    return this.http.patch(AUTH_API + id, course ,httpOptions)
  }
  putCourse(id: number,course: any){
    return this.http.put(AUTH_API+id, course ,httpOptions)
  }
  delteCourse(id: number){
    return this.http.delete(AUTH_API + id);
  }
}
