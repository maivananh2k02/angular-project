import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private fb: FormBuilder, private route: Router) {
    this.formLogin = this.fb.group({
      email: [''],
      password: ['']
    });

  }

  formLogin: FormGroup | any;

  ngOnInit(): void {
  }

  onSubmit() {
    this.authService.login(this.formLogin.value).subscribe(res => {
      console.log(res)
    localStorage.setItem('token',res.access_token);
    localStorage.setItem('userProfile',JSON.stringify(res.user));

    })
    this.route.navigate(['dashboard/list']);
  }
}
