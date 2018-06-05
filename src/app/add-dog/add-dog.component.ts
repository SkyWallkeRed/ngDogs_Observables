import { Component, OnInit } from '@angular/core';
import { DogsService } from '../dogs.service';
import { Dog } from '../dog';

@Component({
  selector: 'app-add-dog',
  templateUrl: './add-dog.component.html',
  styleUrls: ['./add-dog.component.scss']
})
export class AddDogComponent implements OnInit {

  title: string = 'AngularDogs';
  dog: Dog = new Dog();
  imageUrl: string;

  constructor(private dogsService: DogsService) {
    var currentDate = new Date();
    if (currentDate.getHours() > 21 && currentDate.getHours() <= 6) {
      this.imageUrl = 'https://besthqwallpapers.com/Uploads/22-1-2018/37943/thumb2-4k-moon-dog-night-digital-art.jpg';

    } else {
      this.imageUrl = 'http://imgsrv.wkdzradio.com/image/wkdz4/UserFiles/Image/Dog%20Day1.jpg';
    }
  }

  ngOnInit() {
  }

  submitDog() {
    // debugger;
    this.dogsService.addDog(this.dog);
    this.dogsService.dogCountSubject.next();
  }

}
