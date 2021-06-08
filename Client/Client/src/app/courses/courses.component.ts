import { Component, OnInit } from '@angular/core';
import { ApiConnectionService} from '../../services/api-connection.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: any;
  form: any = {
    name: '',
    code: '',
    career: '',
    credits: 0
  };

  constructor(private service: ApiConnectionService) { 
    this.courses = [];
  }

  ngOnInit(): void {
    this.getCourses()
  }

  getCourses(){
    this.service.getCourses().subscribe((response)=>{
      this.courses = response;
    });
  }
  createCourse(){
    const {name, code, career, credits} = this.form;
    var info = {
      "name": name,
      "code": code,
      "career": career,
      "credits": Number.parseInt(credits)
    }
    this.service.postCourse(info).subscribe((response)=>{
      var newlist = [];
      newlist = this.courses
      newlist.push(response);
      this.courses = newlist;
    })
  }

  deleteCourse(id: number){
    this.service.delteCourse(id).subscribe((response) =>{
      this.getCourses();
    })
  }
}
