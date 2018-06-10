import { Pipe, PipeTransform } from '@angular/core';
import { Dog } from './dog';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(dogs: Array<Dog>, filterString: string): Array<Dog> {
    return filterString == undefined ? dogs : dogs.filter((dog) => dog.name.toLowerCase().includes(filterString.toLowerCase()));
  }

}
