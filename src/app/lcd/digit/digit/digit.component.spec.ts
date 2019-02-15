import {async, TestBed} from '@angular/core/testing';

import {DigitComponent} from './digit.component';
import {ResetComponent} from '../../../button/reset/reset/reset.component';
import {SwitchComponent} from '../../../button/switch/switch/switch.component';

describe('DigitComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DigitComponent,
        ResetComponent,
        SwitchComponent
      ]
    })
      .compileComponents();
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(DigitComponent);
    const component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
