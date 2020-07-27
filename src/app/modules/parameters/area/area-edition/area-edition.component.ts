import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormsConfig } from 'src/app/config/forms-config';
import { AreaService } from 'src/app/services/parameters/area.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AreaModel } from 'src/app/models/parameters/area.model';

declare const ShowNotificationMessage: any;

@Component({
  selector: 'app-area-edition',
  templateUrl: './area-edition.component.html',
  styleUrls: ['./area-edition.component.css']
})
export class AreaEditionComponent implements OnInit {

  fgValidator: FormGroup;
  minLengthName: number = FormsConfig.MIN_LENGTH_NAME;
  minLengthCode: number = FormsConfig.MIN_LENGTH_CODE;
  recordId: String = '';

  constructor(
    private fb: FormBuilder,
    private service: AreaService,
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
        this.router.navigate(["/parameters/area"]);
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

  editNewRecord() {
    if (this.fgValidator.invalid) {
      ShowNotificationMessage('Invalid Form');
    } else {
      let model = this.getRecordData();
      this.service.editRecord(model).subscribe(
        data => {
          ShowNotificationMessage('The record has been updated successfuly');
          this.router.navigate(['/parameters/area']);
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
  getRecordData(): AreaModel {
    let model = new AreaModel();
    model.id = this.fgv.id.value;
    model.code = this.fgv.code.value;
    model.name = this.fgv.name.value;
    return model;
  }

  get fgv() {
    return this.fgValidator.controls;
  }
}
