import { Component, OnInit, Input } from '@angular/core';
import { Event } from '../app.component';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  @Input()
  event!: Event;

  constructor() {}

  ngOnInit(): void {
  }

  addTicket() {
    if (this.event.counter <10) {
    ++this.event.counter;
    }    
  }
  removeTicket() {
    if (this.event.counter !== 0) {
    --this.event.counter;
    }
  }
}