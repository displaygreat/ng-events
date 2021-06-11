import { Component, OnInit, Input } from '@angular/core';
// import { Event } from '../app.component';
import { EventsService, Event } from '../events.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  // @Input()
  // event!: Event;
  events$!: Observable<Event[]>;

  constructor(private eventsService: EventsService) { }

  ngOnInit(): void {
    this.events$ = this.eventsService.getEvents$();
  }

  addTicket() {
    // if (this.event.counter <10) {
    // ++this.event.counter;
    // }
    console.log("+");    
  }
  removeTicket() {
    // if (this.event.counter !== 0) {
    // --this.event.counter;
    // }
    console.log("-");
  }

  getAllEvents(){
    this.events$ = this.eventsService.getEvents$();
  }
}