import { Injectable } from '@angular/core';
import { Dog } from './dog';
import Walk from './walk';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class DogsService {
  public DOGS: Array<Dog>;
  score = 0;
  public scoreUpdated: Observable<number>;
  public dogCountUpdated: Observable<number>;
  public dogCountSubject: Subject<number>;
  private scoreSubject: Subject<number>;
  public dogsOnUpdated: Observable<Array<Dog>>;
  public dogsSubject: Subject<Array<Dog>>;

  constructor(private http: HttpClient) {

    this.scoreSubject = new Subject<number>();
    this.dogCountSubject = new Subject<number>();
    this.scoreUpdated = this.scoreSubject.asObservable();
    this.dogCountUpdated = this.dogCountSubject.asObservable();
    this.dogsSubject = new Subject<Array<Dog>>();
    this.dogsOnUpdated = this.dogsSubject.asObservable();
  }

  getDogs() {
    const observable = this.http.get<Dog[]>('/api/dogs/' );
    observable.subscribe((result) => {
      this.dogsSubject.next(result);
    },
      (err) => { console.log(err); }
    );


  }

  getDog(id: number) {
    // return this.getDogs().find((dog) => dog.id == id);
    const objservable = this.http.get<Dog>('/api/dogs/' + id);
    // console.log(objservable);
    return objservable;
    // objservable.subscribe((result) => {
    //   objservable
    // });

  }

  addDog(newDog: Dog) {
    const objservable = this.http.post<Dog>('/api/dogs', { dog: newDog });
    objservable.subscribe(() => {
      this.getDogs();
    });
  }

  updateDog(id: number, dog: Dog) {
    // var existingDogIndex = this.getDogs().findIndex((dog) => dog.id == id);
    // DOGS[existingDogIndex] = dog;
    // debugger
    const updateDog = this.http.put<Dog>('/api/dogs/' + id, dog);
    updateDog.subscribe((data) => {
      console.log(data);
    });
  }

  removeDog(id) {
    const objservable = this.http.delete('/api/dogs/' + id);
    objservable.subscribe(() => {
      this.getDogs();
    });
  }

  addWalk(dog: Dog, walk: Walk) {
    const objservable = this.http.put('/api/dogsWalk/' + dog.id, walk);
    objservable.subscribe((data) => {
      console.log(data);
    });
  }

  addScore(increment) {
    this.score += increment;
    this.scoreSubject.next(this.score);
  }

  getScore() {
    return this.score;
  }
  onFilterChanged(filterString) {
    const objservable = this.http.get<Dog[]>('/api/dogs/' + filterString || '');
    objservable.subscribe((data) => {
      this.dogsSubject.next(data);
    });
  }

}
