import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AreaService } from 'src/app/services/parameters/area.service';
import { Router } from '@angular/router';
import { FormsConfig } from 'src/app/config/forms-config';
import { AreaModel } from 'src/app/models/parameters/area.model';

declare const ShowNotificationMessage: any;

@Component({
  selector: 'app-area-creation',
  templateUrl: './area-creation.component.html',
  styleUrls: ['./area-creation.component.css']
})
export class AreaCreationComponent implements OnInit {

  fgValidator: FormGroup;
  minLengthName: number = FormsConfig.MIN_LENGTH_NAME;
  minLengthCode: number = FormsConfig.MIN_LENGTH_CODE;

  constructor(
    private fb: FormBuilder,
    private service: AreaService,
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
          this.router.navigate(['/parameters/area']);
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
  getRecordData(): AreaModel {
    let model = new AreaModel();
    model.code = this.fgv.code.value;
    model.name = this.fgv.name.value;
    return model;
  }

  get fgv() {
    return this.fgValidator.controls;
  }
}
