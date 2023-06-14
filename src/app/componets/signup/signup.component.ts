import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import ValidateForm from 'src/app/helpers/validationform';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";
  signUpForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private toast: NgToastService,
    private router: Router
    ){}
  ngOnInit(): void{
    this.signUpForm = this.fb.group({
      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
      username: ['',Validators.required],
      email: ['',Validators.required],
      password: ['',Validators.required]
    })
  }
  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye": this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type ="password";

  }
  onSignUp(){
    if(this.signUpForm.valid){
      console.log(this.signUpForm.value)
      //since I will not create a database just go to the dashboard
      this.toast.success({detail: "SUCCESS", duration: 5000})
      this.signUpForm.reset();
      this.router.navigate(['dashboard']);

    }else{

      //throw an error
      ValidateForm.validateAllFormFields(this.signUpForm);
      this.toast.error({detail: "ERROR", summary:"Something went wrong!" ,duration: 5000})
    }
  }

}
