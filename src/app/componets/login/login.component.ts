import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import ValidateForm from 'src/app/helpers/validationform';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";
  loginForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private toast: NgToastService,
    private router: Router
    ){}
  ngOnInit():void{
    this.loginForm = this.fb.group({
      email: ['',Validators.required],
      password: ['',Validators.required]
    })
  }
  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye": this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type ="password";

  }
  onSubmit(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value)
      //since I will not create a database just go to the dashboard
      this.toast.success({detail: "SUCCESS",duration: 5000})
      this.loginForm.reset();
      this.router.navigate(['dashboard']);
    }else{
      //throw an error
      ValidateForm.validateAllFormFields(this.loginForm);
      this.toast.error({detail: "ERROR", summary:"Something went wrong!" ,duration: 5000})
    }
  }

}

