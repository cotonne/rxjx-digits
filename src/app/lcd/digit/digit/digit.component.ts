import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {MultiplexerService} from '../../../chips/multiplexer/multiplexer.service';
import {Observable, of, zip} from 'rxjs';
import {map} from 'rxjs/operators';

type LCD_SEGMENT = [boolean, boolean, boolean, boolean, boolean, boolean, boolean];

@Component({
  selector: 'app-digit',
  templateUrl: './digit.component.html',
  styleUrls: ['./digit.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DigitComponent implements OnInit {

  segments: Observable<LCD_SEGMENT> = of([false, true, true, false, true, true, true] as LCD_SEGMENT);

  constructor(private readonly multiplexer: MultiplexerService) {
  }

  ngOnInit() {
    // TODO : Implement me!

    // Tip 1: Maybe you can test a function display: PINS => LCD_SEGMENT?
    // Tip 2: Maybe you can test seven functions display: PINS => boolean?
  }

}
