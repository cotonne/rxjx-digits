import { Injectable } from '@angular/core';
import {CounterService, PIN, PINS} from '../counter/counter.service';
import {MemoryService} from '../memory/memory.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MultiplexerService {

  constructor(
    private readonly counter: CounterService,
    private readonly memory: MemoryService
  ) { }

  public pins(switchPin: Observable<PIN>): Observable<PINS> {
    // TODO Implement me!
    throw new Error('Implement me!');
  }
}
