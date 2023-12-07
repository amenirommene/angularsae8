import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.css']
})
export class ErrorsComponent {
  name : string;
  @Input() errorMsg;
 // @Input() errorMsgRequired;
 // @Input() errorMsgPattern;
 // @Input() errorMsgNull;

}
