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

  events: Event[] = [];

  buyNumInput: any = [];


  idArr: any = [];
  slotsArr: any = [];

  constructor(private eventsService: EventsService) { }

  ngOnInit(): void {
    // this.events$ = this.eventsService.getEvents$();
    // this.getEventItems();
    // console.log(this.eventItems);
    this.eventsService.getEvents$()
      .subscribe({
        next: data => this.events = data,
        complete: () => {
          for (let i = 0; i < this.events.length; i++) {
            this.buyNumInput.push(0);
          }
          for (let i = 0; i < this.events.length; i++) {
            this.idArr.push(this.events[i].slots);
          }
          console.log(this.slotsArr);
        },
      })
  }

  public count: number = 0;

  // getEventItems() {
  //   this.eventsService.getEvents$().subscribe(result => {
  //   this.eventItems = result;
  //   });

  // getEventItems() {
  //   this.eventsService.getEvents$().subscribe(result => {
  //     this.events = result;
  //   });
  // }

  // addTicket(id: any) {
  //   // for (let i = 0; i<this.eventItems.length; i++){
  //   //   if (this.eventItems[i].counter <10) {
  //   //     ++this.eventItems[i].counter;
  //   //     console.log(this.eventItems[i].counter);
  //   //   }
  //   // }
  //   for (let i = 0; i<this.events.length; i++){
  //     if (this.events[i].counter <10) {
  //       if(id === i) {
  //         ++this.events[i].counter;
  //         console.log(this.events[i].counter);
  //       }
  //     }
  //   }
  //   console.log("+");  
  // }
  // removeTicket(id: any) {
  //   // for (let i = 0; i<this.eventItems.length; i++){
  //   //   if (this.eventItems[i].counter !== 0) {
  //   //     --this.eventItems[i].counter;
  //   //     console.log(this.eventItems[i].counter);
  //   //   }
  //   // }
    
  //   for (let i = 0; i<this.events.length; i++){
  //     if (this.events[i].counter !== 0) {
  //       if(id === i) {
  //         --this.events[i].counter;
  //         console.log(this.events[i].counter);
  //       }
  //     }
  //   }
  //   console.log("-");
  // }

  onPlusClick(i: number) {
    this.buyNumInput[i]++;
    console.log(this.buyNumInput[i]);
    console.log(this.buyNumInput);
  }

  onMinusClick(i: number) {
    if (this.buyNumInput[i] > 0)
      this.buyNumInput[i]--;
      console.log(this.buyNumInput[i]);
      console.log(this.buyNumInput);
  }

  // getAllEvents(){
  //   this.events$ = this.eventsService.getEvents$();
  // }

  async update(name: any){
    const payload = {
      "slots": 12,
    }

    const response = await fetch(`/api/updateEvents/${name}`, {
      method: 'POST',
      body: JSON.stringify(payload)
    });

    const responsePayload = await response.json();
    console.dir(responsePayload);
    console.log('update');
  }

  createEvent() {
  this.eventsService.createEvent().subscribe(
      event => {
        console.log(event);
      }
  );
}

addEvent(event: Event) {
  this.eventsService.addEvent(event).subscribe(
      event => {
        console.log(event);
      }
  );
}
  
}