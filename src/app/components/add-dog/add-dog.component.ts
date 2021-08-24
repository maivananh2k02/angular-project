import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder} from "@angular/forms";
import {DogService} from "../../services/dog.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-dog',
  templateUrl: './add-dog.component.html',
  styleUrls: ['./add-dog.component.css']
})
export class AddDogComponent implements OnInit {
  formAddDog: FormGroup | any;

  constructor(private fb: FormBuilder, private dogService: DogService, private route: Router) {
    this.formAddDog = this.fb.group({
      image: [''],
      name: [''],
      email: [''],
      address: ['']
    })
  }

  ngOnInit(): void {
  }

  add() {
    console.log(this.formAddDog)
    this.dogService.addDog(this.formAddDog.value);
    this.route.navigate(['dashboard/list']);
  }

}
