import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiConnectionService} from '../../services/api-connection.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  id: number;
  course: any;
  form: any = {
    name: '',
    code: '',
    career: '',
    credits: 0
  };
  constructor(private service: ApiConnectionService,private ActivatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getId();
    this.getCourse();
  }
  getId() {
    this.ActivatedRoute.paramMap.subscribe(param => {
      this.id = parseInt(param.get('id'));
    });
  }
  getCourse(){
    this.service.getCourse(this.id).subscribe((response)=>{
      this.course = response;
      this.form = {
        name: this.course.name,
        code: this.course.code,
        career: this.course.career,
        credits: this.course.credits
      }
    })
  }
  updateCourse(){
    const {name, code, career, credits} = this.form;
    var info = {
      "id": this.id,
      "name": name,
      "code": code,
      "career": career,
      "credits": Number.parseInt(credits)
    }
    if(name != null && code != null && career != null && credits != null){
      this.service.putCourse(this.id,info).subscribe((response)=>{
        this.router.navigate(['']);
      })
    }else{
      this.service.patchCourse(this.id,info).subscribe((response)=>{
        this.router.navigate(['']);
      })
    }
  }

}
