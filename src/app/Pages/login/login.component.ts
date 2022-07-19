import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { retry } from 'rxjs';
import { FormValidationService } from 'src/app/Services/form-validation.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit, OnDestroy {

  emailValue!: string
  loginForm!: FormGroup
  submitted!: boolean
  constructor(private router: Router, private fb: FormBuilder
    , private fv: FormValidationService) {

  }

  ngOnInit(): void {
    this.loginInitiateForm();
  }

  loginInitiateForm() {
    this.loginForm = this.fb.group({
      emailID: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required]
    })
  }

  ngOnDestroy(): void {

  }


  // initial Form

  dislayEmail(event: any) {
    debugger;

    this.emailValue = event.currentTarget.value
  }


  get f() {
    return this.loginForm.controls;
  }


  // Form Validation Call the Global service Method
  hasFieldError(fieldName: any): boolean {
    return this.fv.hasFieldError(fieldName, this.submitted);
  }


  onSubmitEvent(item: any) {
    debugger;
    this.submitted = true;
    if (!this.loginForm.valid) return;
    alert("api call here");

    // alert(this.loginForm.controls['emailID'].value);

    if (item == 'login') {
      // this.router.navigate(['/employe-login']);
      // alert("Submit");
      console.log("onsubmit event trigger");
    }
    if (item == "reset") {
      console.log("reset log");
    }
  }

}
