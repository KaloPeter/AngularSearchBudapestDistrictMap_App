import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ToastContent } from 'src/app/model/toastContent';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent {


  @Input() toastContent: ToastContent | undefined;
  @Output() removeToastOut = new EventEmitter<ToastContent>();

  removeToast(){
  this.removeToastOut.emit(this.toastContent);
  }

}
