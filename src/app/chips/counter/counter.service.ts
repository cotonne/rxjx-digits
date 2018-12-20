import {Injectable} from '@angular/core';
import {ClockService} from '../clock/clock.service';
import {BehaviorSubject} from 'rxjs';

export type PIN = 0 | 1;
export type PINS = [PIN, PIN, PIN, PIN];

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  memory$: BehaviorSubject<PINS> = new BehaviorSubject([0, 0, 0, 0] as PINS);

  constructor(private readonly clock: ClockService) {
    // TODO : Implement me!
  }

  public getPins() {
    return this.memory$;
  }

}
