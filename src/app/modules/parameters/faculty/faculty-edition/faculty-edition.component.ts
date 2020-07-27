import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormsConfig } from 'src/app/config/forms-config';
import { FacultyService } from 'src/app/services/parameters/faculty.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FacultyModel } from 'src/app/models/parameters/faculty.model';

declare const ShowNotificationMessage: any;

@Component({
  selector: 'app-faculty-edition',
  templateUrl: './faculty-edition.component.html',
  styleUrls: ['./faculty-edition.component.css']
})
export class FacultyEditionComponent implements OnInit {

  fgValidator: FormGroup;
  minLengthName: number = FormsConfig.MIN_LENGTH_NAME;
  minLengthCode: number = FormsConfig.MIN_LENGTH_CODE;
  recordId: String = '';

  constructor(
    private fb: FormBuilder,
    private service: FacultyService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.recordId = this.route.snapshot.params["id"];
  }

  ngOnInit(): void {
    this.FormBuilding();
    this.getRecordById();
  }

  getRecordById() {
    this.service.getRecordById(this.recordId).subscribe(
      data =>{
        this.fgv.id.setValue(data.id);
        this.fgv.code.setValue(data.code);
        this.fgv.name.setValue(data.name);
      },
      error => {
        ShowNotificationMessage('Record not found.');
        this.router.navigate(["/parameters/faculty"]);
      }
    );
  }

  FormBuilding() {
    this.fgValidator = this.fb.group({
      id: ['', [Validators.required]],
      code: ['', [Validators.required, Validators.minLength(this.minLengthCode)]],
      name: ['', [Validators.required, Validators.minLength(this.minLengthName)]],
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
          this.router.navigate(['/parameters/faculty']);
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
  getRecordData(): FacultyModel {
    let model = new FacultyModel();
    model.id = this.fgv.id.value;
    model.code = this.fgv.code.value;
    model.name = this.fgv.name.value;
    return model;
  }

  get fgv() {
    return this.fgValidator.controls;
  }
}
