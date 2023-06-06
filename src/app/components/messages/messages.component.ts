import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
  @Input () msg: string ='';
  @Input () sended : string='';
  @Input () time : string='';
  @Input () msgbox : string='';

}
