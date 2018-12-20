import {Component, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {PIN} from '../../../chips/counter/counter.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.less']
})
export class ResetComponent implements OnInit {

  @Output()
  state: boolean;

  switchPin: Observable<PIN>;
  resetPin: Observable<PIN>;

  constructor() {
  }

  ngOnInit() {
    // TODO Implement me!
  }

}
