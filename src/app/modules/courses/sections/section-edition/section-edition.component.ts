import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormsConfig } from 'src/app/config/forms-config';
import { SectionService } from 'src/app/services/courses/section.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SectionModel } from 'src/app/models/course/section.model';
import { CourseService } from 'src/app/services/courses/course.service';
import { CourseModel } from 'src/app/models/course/course.model';

declare const ShowNotificationMessage: any;

@Component({
  selector: 'app-section-edition',
  templateUrl: './section-edition.component.html',
  styleUrls: ['./section-edition.component.css']
})
export class SectionEditionComponent implements OnInit {

  fgValidator: FormGroup;
  minLengthName: number = FormsConfig.MIN_LENGTH_NAME;
  minLengthCode: number = FormsConfig.MIN_LENGTH_CODE;
  recordId: String = '';
  courseList: CourseModel[];

  constructor(
    private fb: FormBuilder,
    private service: SectionService,
    private router: Router,
    private route: ActivatedRoute,
    private courseService: CourseService
  ) {
    this.recordId = this.route.snapshot.params["id"];
  }

  ngOnInit(): void {
    this.FormBuilding();
    this.getRecordById();
    this.fillCourseSelect();
  }

  /**
   * Get all records of courses to select them from GUI
   */
  fillCourseSelect() {
    this.courseService.getAllRecords().subscribe(
      data => {
        this.courseList = data;
      },
      err => {

      }
    );
  }

  getRecordById() {
    this.service.getRecordById(this.recordId).subscribe(
      data => {
        this.fgv.id.setValue(data.id);
        this.fgv.code.setValue(data.code);
        this.fgv.name.setValue(data.name);
        this.fgv.content.setValue(data.content);
        this.fgv.video.setValue(data.video);
        this.fgv.attached.setValue(data.attached);
        this.fgv.courseId.setValue(data.courseId);
      },
      error => {
        ShowNotificationMessage('Record not found.');
        this.router.navigate(["/courses/section-list"]);
      }
    );
  }

  FormBuilding() {
    this.fgValidator = this.fb.group({
      id: ['', [Validators.required]],
      code: ['', [Validators.required, Validators.minLength(this.minLengthCode)]],
      name: ['', [Validators.required, Validators.minLength(this.minLengthName)]],
      content: ['', [Validators.required]],
      video: ['', [Validators.required]],
      attached: ['', [Validators.required]],
      courseId: ['', [Validators.required]],
    });
  }

  editRecord() {
    if (this.fgValidator.invalid) {
      ShowNotificationMessage('Invalid Form');
    } else {
      let model = this.getRecordData();
      this.service.editRecord(model).subscribe(
        data => {
          ShowNotificationMessage('The record has been updated successfuly');
          this.router.navigate(['/parameters/section']);
        },
        error => {
          ShowNotificationMessage('Error updating record.');
        }
      );
    }
  }

  /**
   * Build a model instance to send it
   */
  getRecordData(): SectionModel {
    let model = new SectionModel();
    model.id = this.fgv.id.value;
    model.code = this.fgv.code.value;
    model.name = this.fgv.name.value;
    model.video = this.fgv.video.value;
    model.content = this.fgv.content.value;
    model.attached = this.fgv.attached.value;
    model.courseId = this.fgv.courseId.value;
    return model;
  }

  get fgv() {
    return this.fgValidator.controls;
  }
}
