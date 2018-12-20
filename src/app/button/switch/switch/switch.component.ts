import {Component, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.less']
})
export class SwitchComponent implements OnInit {

  @Output()
  state: boolean;

  constructor() {
  }

  ngOnInit() {
  }

}
