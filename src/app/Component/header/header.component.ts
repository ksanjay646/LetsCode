import { Component, OnInit } from '@angular/core';
import { UiLabelConstants } from 'src/app/ui-label.constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  uiLabelConstants = UiLabelConstants;
  constructor() { }

  ngOnInit(): void {
  }

}
