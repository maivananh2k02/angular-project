import {Injectable} from '@angular/core';
import {Dog} from "../dog";

@Injectable({
  providedIn: 'root'
})
export class DogService {
  private dogs: Dog[] = [
    {
      image: 'https://petto.vn/wp-content/uploads/2019/07/3150_sao-han-sinh-nam-1997-10.jpg',
      name: 'Chó Husky Sibir',
      email: 'HuskySibir@gmail.com',
      address: 'vùng Đông Bắc Sibir, Nga.'
    },
    {
      image: 'https://zoipet.com/wp-content/uploads/2020/03/cho-pug-mat-xe.jpg',
      name: 'Chó Pug',
      email: 'Pug@gmail.com',
      address: 'Trung Quốc'
    },
    {
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/American_Bully_Female_%2811527194885%29.jpg/300px-American_Bully_Female_%2811527194885%29.jpg',
      name: 'Chó Bully Mỹ',
      email: 'Bully@gmail.com',
      address: 'Mỹ'
    },
    {
      image: 'https://petmaster.vn/petroom/wp-content/uploads/2020/03/cho-ngao-tay-tang.jpg',
      name: 'Tibetan Mastiff',
      email: 'TibetanMastiff@gmail.com',
      address: 'Tây Tạng, Ấn Độ, Himalaya, Nepal'
    }];

  constructor() {
  }

  getAll() {
    return this.dogs;
  }

  findDogKeyWord(val: any) {
    return this.dogs.filter(dog => {
      return (dog.name.toLowerCase().indexOf(val) != -1 || dog.email.toLowerCase().indexOf(val) != -1);
    })
  }

  destroy(id: number) {
    if (confirm('are you sure ?')) {
      this.dogs.splice(id, 1);
    }
  }

  update(id: number, data: Dog) {
    this.dogs[id] = data;
  }

  addDog(data:Dog) {
    this.dogs.push(data);
  }

}
