import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentModel } from '../../../models/student.model';
import { StudentService } from '../../../services/student.service';
import { ActivatedRoute, Router } from '@angular/router';

declare const ShowNotificationMessage: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  fgValidator: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: StudentService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.FormBuilding();
  }

  FormBuilding() {
    this.fgValidator = this.fb.group({
      code: ['', [Validators.required, Validators.minLength(5)]],
      document: ['', [Validators.required, Validators.minLength(7)]],
      name: ['', [Validators.required, Validators.minLength(2)]],
      lastname: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      countryCode: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(4)]],
      cellphone: ['', [Validators.required, Validators.minLength(10)]],
      career: ['']
    });
  }

  StudentRegister() {
    if (this.fgValidator.invalid) {
      ShowNotificationMessage('Invalid Form');
    } else {
      let model = this.getStudentData();
      console.log(model);
      this.service.StudentRegister(model).subscribe(data => {
        console.log(data);
        if (data) {
          ShowNotificationMessage('Registration has been successful. You cand found the password in your mail inbox.');
          this.router.navigate(['/security/login']);
        } else {
          ShowNotificationMessage('Error registering data.');
        }
      });
    }
  }

  /**
   * Build a model instance to send it
   */
  getStudentData(): StudentModel {
    let model = new StudentModel();
    model.code = this.fgv.code.value;
    model.document = this.fgv.document.value;
    model.name = this.fgv.name.value;
    model.lastname = this.fgv.lastname.value;
    model.email = this.fgv.email.value;
    model.phone = `${this.fgv.countryCode.value} ${this.fgv.cellphone.value}`;
    model.career = this.fgv.career.value;
    return model;
  }

  get fgv() {
    return this.fgValidator.controls;
  }
}
