import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormsConfig } from 'src/app/config/forms-config';
import { FacultyModel } from 'src/app/models/parameters/faculty.model';
import { AreaModel } from 'src/app/models/parameters/area.model';
import { Router, ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/app/services/courses/course.service';
import { FacultyService } from 'src/app/services/parameters/faculty.service';
import { AreaService } from 'src/app/services/parameters/area.service';
import { CourseModel } from 'src/app/models/course/course.model';

declare const ShowNotificationMessage: any;

@Component({
  selector: 'app-course-edition',
  templateUrl: './course-edition.component.html',
  styleUrls: ['./course-edition.component.css']
})
export class CourseEditionComponent implements OnInit {

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
    private areaService: AreaService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getRecordDataById();
    this.FillAreaSelect();
    this.FillFacultySelect();
    this.FormBuilding();
  }

  getRecordDataById() {
    let id = this.route.snapshot.params["id"];
    this.service.getRecordById(id).subscribe(
      data => {
        this.fgv.id.setValue(data.id);
        this.fgv.code.setValue(data.code);
        this.fgv.name.setValue(data.name);
        this.fgv.description.setValue(data.description);
        this.fgv.professor.setValue(data.professor);
        this.fgv.rate.setValue(data.rate);
        this.fgv.duration.setValue(data.duration);
        this.fgv.facultyId.setValue(data.facultyId);
        this.fgv.areaId.setValue(data.areaId);
        this.fgv.image.setValue(data.image);
      },
      err => {

      }
    );
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
      id: ['', [Validators.required]],
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

  editRecord() {
    if (this.fgValidator.invalid) {
      ShowNotificationMessage('Invalid Form');
    } else {
      let model = this.getRecordData();
      this.service.editRecord(model).subscribe(
        data => {
          ShowNotificationMessage('The record has been updated successfuly');
          this.router.navigate(['/courses/course-list']);
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
  getRecordData(): CourseModel {
    let model = new CourseModel();
    model.id = this.fgv.id.value;
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
