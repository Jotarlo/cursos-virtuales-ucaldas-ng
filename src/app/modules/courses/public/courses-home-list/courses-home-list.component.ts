import { Component, OnInit } from '@angular/core';
import { PublicCourseService } from 'src/app/services/courses/public-course.service';
import { CourseModel } from 'src/app/models/course/course.model';

declare const ShowNotificationMessage: any;

@Component({
  selector: 'app-courses-home-list',
  templateUrl: './courses-home-list.component.html',
  styleUrls: ['./courses-home-list.component.css']
})
export class CoursesHomeListComponent implements OnInit {

  courseList: CourseModel[];

  constructor(private service: PublicCourseService) { }

  ngOnInit(): void {
    this.getAllCourses();
  }

  /**
   * Get all records of courses to show them into home
   */
  getAllCourses() {
    this.service.getAllRecords().subscribe(
      data => {
        this.courseList = data;
      },
      err => {
        ShowNotificationMessage("Error loading the courses list.");
      }
    );
  }

}
