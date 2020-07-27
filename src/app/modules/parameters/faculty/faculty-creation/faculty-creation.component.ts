import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FacultyService } from 'src/app/services/parameters/faculty.service';
import { Router } from '@angular/router';
import { FormsConfig } from 'src/app/config/forms-config';
import { FacultyModel } from 'src/app/models/parameters/faculty.model';

declare const ShowNotificationMessage: any;

@Component({
  selector: 'app-Faculty-creation',
  templateUrl: './Faculty-creation.component.html',
  styleUrls: ['./Faculty-creation.component.css']
})
export class FacultyCreationComponent implements OnInit {

  fgValidator: FormGroup;
  minLengthName: number = FormsConfig.MIN_LENGTH_NAME;
  minLengthCode: number = FormsConfig.MIN_LENGTH_CODE;

  constructor(
    private fb: FormBuilder,
    private service: FacultyService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.FormBuilding();
  }

  FormBuilding() {
    this.fgValidator = this.fb.group({
      code: ['', [Validators.required, Validators.minLength(this.minLengthCode)]],
      name: ['', [Validators.required, Validators.minLength(this.minLengthName)]],
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
          this.router.navigate(['/parameters/faculty']);
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
  getRecordData(): FacultyModel {
    let model = new FacultyModel();
    model.code = this.fgv.code.value;
    model.name = this.fgv.name.value;
    return model;
  }

  get fgv() {
    return this.fgValidator.controls;
  }
}
