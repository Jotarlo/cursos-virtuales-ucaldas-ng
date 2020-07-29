import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SecurityService } from 'src/app/services/security.service';
import { Router } from '@angular/router';
import { ChangePasswordModel } from '../../../models/security/change-password.model';

import MD5 from 'crypto-js/md5';

declare const ShowNotificationMessage: any;

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  fgValidator: FormGroup;

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
      currentPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.required]],
      newPassword2: ['', [Validators.required]]
    });
  }

  ChangePassword() {
    if (this.fgValidator.invalid || this.fgv.newPassword.value != this.fgv.newPassword2.value) {
      ShowNotificationMessage('Invalid Form.');
    } else {
      let model = this.getChangePasswordData();
      this.service.ChangePassword(model).subscribe(
        data => {
          ShowNotificationMessage('Your password has been changed.');
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
  getChangePasswordData(): ChangePasswordModel {
    let model = new ChangePasswordModel();
    model.id = this.service.getUserId();
    model.currentPassword = MD5(this.fgv.currentPassword.value).toString();
    model.newPassword = MD5(this.fgv.newPassword.value).toString();
    console.log(model);
    return model;
  }

  get fgv() {
    return this.fgValidator.controls;
  }

}
