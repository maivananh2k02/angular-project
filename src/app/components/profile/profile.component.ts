import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userProfile: any;

  constructor(private authService: AuthService) {
    this.userProfile = JSON.parse(<string>this.authService.getUser());
    console.log(this.userProfile);
  }

  ngOnInit(): void {
  }

}
