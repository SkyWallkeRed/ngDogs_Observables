import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title: string = 'AngularDogs';
  dogName: string = 'Rex';
  dogWeight: number = 35;
  ownerName: string = 'Hey';
  imageUrl: string;

  constructor() {
    var currentDate = new Date();
    if (currentDate.getHours() > 21 && currentDate.getHours() <= 6) {
      this.imageUrl = 'https://besthqwallpapers.com/Uploads/22-1-2018/37943/thumb2-4k-moon-dog-night-digital-art.jpg';
    }
    else {
      this.imageUrl = 'http://imgsrv.wkdzradio.com/image/wkdz4/UserFiles/Image/Dog%20Day1.jpg';
    }
  }
}
