import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormsConfig } from 'src/app/config/forms-config';
import { SecurityService } from 'src/app/services/security.service';
import { Router } from '@angular/router';
import { ResetPasswordModel } from '../../../models/security/reset-password.model';

declare const ShowNotificationMessage: any;

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  fgValidator: FormGroup;
  document_min_length: number = FormsConfig.DOCUMENT_MIN;

  constructor(
    private fb: FormBuilder,
    private service: SecurityService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.FormBuilding();
  }

  FormBuilding() {
    this.fgValidator = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(this.document_min_length)]],
      type: ['', [Validators.required]]
    });
  }

  ResetPassword() {
    if (this.fgValidator.invalid) {
      ShowNotificationMessage('Invalid Form.');
    } else {
      let model = this.getResetPasswordData();
      this.service.ResetPassword(model).subscribe(
        data => {
          ShowNotificationMessage('Your password has been reset, please verify your cellphone or email inbox.');
          this.router.navigate(["/security/login"]);
        },
        err => {
          ShowNotificationMessage('Error processing data.');
        }
      );
    }
  }

  /**
   * Build a model instance to send it
   */
  getResetPasswordData(): ResetPasswordModel {
    let model = new ResetPasswordModel();
    model.username = this.fgv.username.value;
    model.type = parseInt(this.fgv.type.value);
    console.log(model);
    return model;
  }

  get fgv() {
    return this.fgValidator.controls;
  }

}
