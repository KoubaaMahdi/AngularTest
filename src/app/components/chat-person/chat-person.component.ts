import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-chat-person',
  templateUrl: './chat-person.component.html',
  styleUrls: ['./chat-person.component.css']
})
export class ChatPersonComponent {
  @Input () name : string ='';
  @Input () nbMessage : string ='';

}
