import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  username = 'wouter'
  password = ''
  number = 0
  errorMessage = 'Invalid credentials'
  invalidLogin = false

  constructor(private router : Router) {}

  ngOnInit(): void {
    
  }

  handleLogin(): void{
    console.log(this.username);
    this.number += 1;
    console.log(this.number);
    if(this.username === 'wouter' && this.password === 'dummy' ){
      this.invalidLogin = false;
      //Redirect to welcome page
      this.router.navigate(['welcome/'+this.username]);
    }
    else
    {
      this.invalidLogin = true;
    }
  }
}
