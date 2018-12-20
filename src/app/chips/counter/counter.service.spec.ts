import {CounterService} from './counter.service';
import {ClockService} from '../clock/clock.service';
import {of} from 'rxjs';
import {TestBed} from '@angular/core/testing';

describe('CounterService', () => {
  const spy = jasmine.createSpyObj('ClockSerive', ['tick']);

  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      {provide: ClockService, useValue: spy}
    ]
  }));
  //
  // it('should be created', () => {
  //   const service: CounterService = TestBed.get(CounterService);
  //   expect(service).toBeng Truthy();
  // });

  it('should increase by one after one clock cycle', () => {
    const clockServiceSpy = TestBed.get(ClockService);
    clockServiceSpy.tick.and.returnValue(of(1));

    const service: CounterService = TestBed.get(CounterService);

    service.memory$().subscribe((p) =>
      expect(p as Array).toEqual([1, 0, 0, 0])
    );
  });
});
