import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormsConfig } from 'src/app/config/forms-config';
import { CourseService } from 'src/app/services/courses/course.service';
import { Router } from '@angular/router';
import { CourseModel } from 'src/app/models/course/course.model';
import { AreaService } from 'src/app/services/parameters/area.service';
import { FacultyService } from 'src/app/services/parameters/faculty.service';
import { FacultyModel } from 'src/app/models/parameters/faculty.model';
import { AreaModel } from 'src/app/models/parameters/area.model';

declare const ShowNotificationMessage: any;

@Component({
  selector: 'app-course-creation',
  templateUrl: './course-creation.component.html',
  styleUrls: ['./course-creation.component.css']
})
export class CourseCreationComponent implements OnInit {

  fgValidator: FormGroup;
  minLengthName: number = FormsConfig.MIN_LENGTH_NAME;
  minLengthCode: number = FormsConfig.MIN_LENGTH_CODE;
  facultyList: FacultyModel[];
  areaList: AreaModel[];

  constructor(
    private fb: FormBuilder,
    private service: CourseService,
    private router: Router,
    private facultyService: FacultyService,
    private areaService: AreaService
  ) { }

  ngOnInit(): void {
    this.FormBuilding();
    this.FillAreaSelect();
    this.FillFacultySelect();
  }

  FillAreaSelect() {
    this.areaService.getAllRecords().subscribe(
      data => {
        this.areaList = data;        
      },
      error => {
        ShowNotificationMessage("Error loading area list.");
      }
    );
  }

  FillFacultySelect() {
    this.facultyService.getAllRecords().subscribe(
      data => {
        this.facultyList = data;
      },
      error => {
        ShowNotificationMessage("Error loading faculty list.");
      }
    );
  }

  FormBuilding() {
    this.fgValidator = this.fb.group({
      code: ['', [Validators.required, Validators.minLength(this.minLengthCode)]],
      name: ['', [Validators.required, Validators.minLength(this.minLengthName)]],
      description: ['', [Validators.required]],
      professor: ['', [Validators.required]],
      rate: ['', [Validators.required]],
      duration: ['', [Validators.required]],
      image: ['', [Validators.required]],
      areaId: ['', [Validators.required]],
      facultyId: ['', [Validators.required]],
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
          this.router.navigate(['/courses/course-list']);
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
  getRecordData(): CourseModel {
    let model = new CourseModel();
    model.code = this.fgv.code.value;
    model.name = this.fgv.name.value;
    model.description = this.fgv.description.value;
    model.professor = this.fgv.professor.value;
    model.rate = this.fgv.rate.value;
    model.duration = this.fgv.duration.value;
    model.image = this.fgv.image.value;
    model.facultyId = this.fgv.facultyId.value;
    model.areaId = this.fgv.areaId.value;
    return model;
  }

  get fgv() {
    return this.fgValidator.controls;
  }
}
