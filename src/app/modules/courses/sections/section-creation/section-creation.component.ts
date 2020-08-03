import { Component, OnInit } from '@angular/core';
import { SectionModel } from '../../../../models/course/section.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormsConfig } from 'src/app/config/forms-config';
import { Router } from '@angular/router';
import { SectionService } from '../../../../services/courses/section.service';
import { CourseModel } from 'src/app/models/course/course.model';
import { CourseService } from 'src/app/services/courses/course.service';
declare const ShowNotificationMessage: any;

@Component({
  selector: 'app-section-creation',
  templateUrl: './section-creation.component.html',
  styleUrls: ['./section-creation.component.css']
})
export class SectionCreationComponent implements OnInit {

  fgValidator: FormGroup;
  minLengthName: number = FormsConfig.MIN_LENGTH_NAME;
  minLengthCode: number = FormsConfig.MIN_LENGTH_CODE;
  courseList: CourseModel[];

  constructor(
    private fb: FormBuilder,
    private service: SectionService,
    private router: Router,
    private courseService: CourseService
  ) { }

  ngOnInit(): void {
    this.FormBuilding();
    this.courseService.getAllRecords().subscribe(
      data => {
        this.courseList = data;
      },
      err=>{
        
      }
    );
  }

  FormBuilding() {
    this.fgValidator = this.fb.group({
      code: ['', [Validators.required, Validators.minLength(this.minLengthCode)]],
      name: ['', [Validators.required, Validators.minLength(this.minLengthName)]],
      content: ['', [Validators.required]],
      video: ['', [Validators.required]],
      attached: ['', [Validators.required]],
    });
  }

  saveNewRecord() {
    if (this.fgValidator.invalid) {
      ShowNotificationMessage('Invalid Form');
    } else {
      let model = this.getRecordData();
      this.service.saveNewRecord(model).subscribe(
        data => {
          ShowNotificationMessage('The record has been saved successfuly');
          this.router.navigate(['/courses/section-list']);
        },
        error => {
          ShowNotificationMessage('Error registering record.');
        }
      );
    }
  }

  /**
   * Build a model instance to send it
   */
  getRecordData(): SectionModel {
    let model = new SectionModel();
    model.code = this.fgv.code.value;
    model.name = this.fgv.name.value;
    model.video = this.fgv.video.value;
    model.content = this.fgv.content.value;
    model.attached = this.fgv.attached.value;
    return model;
  }

  get fgv() {
    return this.fgValidator.controls;
  }
}
