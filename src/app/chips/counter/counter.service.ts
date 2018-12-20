import {Injectable} from '@angular/core';
import {ClockService} from '../clock/clock.service';
import {BehaviorSubject, Subject} from 'rxjs';

export type PIN = 0 | 1;
export type PINS = [PIN, PIN, PIN, PIN];

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  memory$: Subject<PINS> = new BehaviorSubject([0, 0, 0, 0] as PINS);

  constructor(private readonly clock: ClockService) {
    // TODO : Implement me!

    // Tip 1: can you retrieve the last value of an Observable? Or of a Subject?  Or... ?
    // Tip 2: maybe you can test the function increment: PINS => PINS without Observable?
  }

  public getPins() {
    return this.memory$;
  }

}
