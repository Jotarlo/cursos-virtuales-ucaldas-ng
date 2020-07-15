import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  fgValidator: FormGroup;

  constructor(
    private fb: FormBuilder
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
      career: []
    });
  }

  StudentRegister() {
    if (this.fgValidator.invalid) {
      alert('Invalid form...');
    } else {
      alert('To register');
    }
  }
}
