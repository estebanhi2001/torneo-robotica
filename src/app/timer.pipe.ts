import { Pipe, PipeTransform } from '@angular/core';
import { Observable, timer, interval } from 'rxjs';
import { startWith, switchMap, map } from 'rxjs/operators';
import * as firebase from 'firebase/app'; 
import 'firebase/firestore';

@Pipe({
  name: 'timer'
})
export class TimerPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return interval(1)
      .pipe(
        map(res => {
          if (value.i){
            if (value.f) {
              return value.f - value.i
            } else {
              return Date.now() - value.i
            }
          } else{
            return 0
          }
        })
      )
      ;
  }

}
