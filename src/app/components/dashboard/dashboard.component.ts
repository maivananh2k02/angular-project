import {Component, OnInit} from '@angular/core';
import {Dog} from "../../dog";
import {DogService} from "../../services/dog.service";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  size = 150;
  userProfile:any;
  show = false;
  add = false;
  dog: Dog = {
    image: '',
    name: '',
    email: '',
    address: ''
  }
  dogs: Dog[] = [];
  dogFilter: Dog[] = [];

  constructor(private dogService:DogService,private authService:AuthService) {
    this.dogs=this.dogService.getAll();
    this.dogFilter = this.dogs;
    this.userProfile=JSON.parse(<string>this.authService.getUser());
    console.log(this.userProfile);
  }

  ngOnInit(): void {

  }

  showOrhide() {
    this.show = !this.show;
  }

  delete(id: number) {
    this.dogService.destroy(id);
  }


  getCreateImage(val: HTMLInputElement) {
    this.dog.image = String(val.value)
  }

  getCreateName(val: HTMLInputElement) {
    this.dog.name = String(val.value)

  }

  getCreateAddress(val: HTMLInputElement) {
    this.dog.address = String(val.value)

  }

  getCreateEmail(val: HTMLInputElement) {
    this.dog.email = String(val.value)

  }

  pushDog() {
    this.dogs.push(this.dog);
    this.add = false;
  }

  changeShowFormCreate() {
    this.add = !this.add;
  }

  edit(id: number) {
    console.log(this.dogs[id])
  }

  searchDog(val: any) {
    let keyWord = val.toLowerCase();
    this.dogFilter = (keyWord) ? this.dogService.findDogKeyWord(keyWord) : this.dogs;
  }

  changeSize(val: any) {
    console.log(this.size = val.value);
  }

}
