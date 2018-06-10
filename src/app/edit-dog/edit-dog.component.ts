import { Component, OnInit } from '@angular/core';
import { Dog } from '../dog';
import { DogsService } from '../dogs.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-dog',
  templateUrl: './edit-dog.component.html',
  styleUrls: ['./edit-dog.component.scss']
})
export class EditDogComponent implements OnInit {

  dog = new Dog();

  constructor(private dogsService: DogsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.dogsService.getDog(params.id).subscribe((result) => {
        this.dog = result;
      });
    });

  }
  updateDog() {
    this.dogsService.updateDog(this.dog.id, this.dog);
    this.router.navigate(['/']);
  }


}
