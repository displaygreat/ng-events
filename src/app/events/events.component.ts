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
  // eventItems: Event[] = [];

  constructor(private eventsService: EventsService) { }

  ngOnInit(): void {
    this.events$ = this.eventsService.getEvents$();
    // this.getEventItems();
    // console.log(this.eventItems);
  }

  public count: number = 0;

  // getEventItems() {
  //   this.eventsService.getEvents$().subscribe(result => {
  //   this.eventItems = result;
  //   });
  // }

  addTicket() {
    // for (let i = 0; i<this.eventItems.length; i++){
    //   if (this.eventItems[i].counter <10) {
    //     ++this.eventItems[i].counter;
    //     console.log(this.eventItems[i].counter);
    //   }
    // }
    console.log("+");  
  }
  removeTicket() {
    // for (let i = 0; i<this.eventItems.length; i++){
    //   if (this.eventItems[i].counter !== 0) {
    //     --this.eventItems[i].counter;
    //     console.log(this.eventItems[i].counter);
    //   }
    // }
    console.log("-");
  }

  getAllEvents(){
    this.events$ = this.eventsService.getEvents$();
  }

}