import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {DogService} from "../../services/dog.service";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  formEditDog: FormGroup | any;
  id = this.router.snapshot.params.id;

  constructor(private router: ActivatedRoute, private dogService: DogService, private fb: FormBuilder, private route: Router) {
    let dog = this.dogService.getAll()[this.id];
    console.log(this.dogService.getAll()[this.id])
    this.formEditDog = this.fb.group({
      image: [dog.image],
      name: [dog.name],
      email: [dog.email],
      address: [dog.address]
    })

  }


  ngOnInit(): void {

  }


  onSubmit() {
    console.log(this.formEditDog.value)
    this.dogService.update(this.id, this.formEditDog.value);
    this.route.navigate(['dashboard/list']);
  }
}
