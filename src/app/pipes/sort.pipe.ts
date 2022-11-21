import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
 export class SortPipe implements PipeTransform {

  transform(list: any[], column: string): any[] {
    let sortArray = list.sort((a: any, b: any) => {
      if (a[column] < b[column]) {
        return -1;
      } 
      else if (a[column] > b[column]) {
        return 1;
      } 
      else {
        return 0;
      }
    });
    return sortArray;

 }

 }




