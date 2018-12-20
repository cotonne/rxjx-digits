import { Injectable } from '@angular/core';
import {ClockService} from '../clock/clock.service';
import {Observable} from 'rxjs';
import {PIN, PINS} from '../counter/counter.service';

@Injectable({
  providedIn: 'root'
})
export class MemoryService {

  constructor(private readonly clock: ClockService) {
  }

  public pins(select: PIN): Observable<PINS> {
    throw new Error('Implement Me!');
  }
}
