import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiConnectionService} from '../../services/api-connection.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id: number;
  course: any;
  constructor(private service: ApiConnectionService,private ActivatedRoute: ActivatedRoute) { }

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
    })
  }

}
