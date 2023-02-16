import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from 'src/app/Services/service/courses.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  course;
  courseId;
  editMode:boolean = false;
  constructor(private activatedRoute : ActivatedRoute, private service:CoursesService, private router:Router) { }

  ngOnInit(): void {
    // this.courseId = this.activatedRoute.snapshot.paramMap.get('id');
    // this.courseId = this.activatedRoute.snapshot.params['id'];
    // this.course = this.service.courses.find( x => x.id == this.courseId);

    this.activatedRoute.paramMap.subscribe((param) => {
      this.courseId = param.get('id');
      this.course = this.service.courses.find(x => x.id == this.courseId);

      this.activatedRoute.queryParamMap.subscribe((param)=> {
        this.editMode = Boolean(param.get('edit'));
      })
    })
  }

  appendQueryParam(){
    this.router.navigate(['/courses/course', this.courseId], {queryParams: {edit: true}});
  }
}
