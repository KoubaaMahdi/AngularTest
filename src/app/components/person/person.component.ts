import { Component,OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  @Input () name: string ='';
  @Input () status : string='';
  @Input () statusClass : string='';
  @Input () selected : string='';
  constructor() {}

  ngOnInit(): void {
    
  }


}
