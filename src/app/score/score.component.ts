import { Component, OnInit } from '@angular/core';
import { DogsService } from '../dogs.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {

  score: number;
  dogsCount: number;

  constructor(private dogsService: DogsService) { }

  ngOnInit() {
    //   this.score = this.dogsService.getScore();
    //   this.dogsCount = this.dogsService.getDogs().length;
    //   this.dogsService.scoreUpdated.subscribe((newScore) => {
    //     this.score = newScore;
    //   });

    //   this.dogsService.dogCountUpdated.subscribe(() => {
    //     this.dogsCount = this.dogsService.getDogs().length;
    //   })
  }

}

