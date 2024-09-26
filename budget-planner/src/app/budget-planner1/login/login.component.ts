import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm:any;
  registerForm:any;
  activeForm: 'login' | 'register' = 'login';
  errorMessage: string | null = null;


  constructor(private fb: FormBuilder,private router: Router,

  ){}
  ngOnInit(){
    this.loginForm = this.fb.group({
      email:['',[Validators.required, Validators.email]],
      password: ['',Validators.required]
    });
    this.registerForm = this.fb.group({
      username:['',Validators.required],
      email:['',[Validators.required, Validators.email]],
      password: ['',Validators.required]

    });
  }

  toggleForm(form: 'login' | 'register'){
    this.activeForm = form;
  }

  login(){
    if(this.loginForm.valid){
      console.log("Login info==>", this.loginForm.value);
      this.router.navigate(['/budget-planner/dashboard']);

    }else{
      this.errorMessage = 'Invalid email or password!';
      setTimeout(() => {
        this.errorMessage = null;

      }, 3000);
    }
  }


  register(){
    if(this.registerForm.valid){
      console.log("Register info==>>", this.registerForm.value);
      setTimeout(()=>{
        window.location.reload();
      },2000);
      this.router.navigate(['budget-planner/login']);
    }else{
      this.errorMessage = 'Please fill in all fields correctly!';
      setTimeout(() => {
        this.errorMessage = null;

      }, 3000);
    }
  }
  }

