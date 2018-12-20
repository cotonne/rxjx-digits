import {Injectable} from '@angular/core';
import {interval, Observable} from 'rxjs';
import {PIN} from '../counter/counter.service';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClockService {

  constructor() {
  }

  /**
   * Every 500 ms, the state change
   * So, the frequency of the clock is 1Hz
   */
  public tick(): Observable<PIN> {
    // TODO : Implement me!
    throw new Error('Implement me!');

    // Tip 1: Do you know that an function interval exists in RxJs?
    // Tip 2: Maybe you can test a intToTick = number => PIN
  }
}
