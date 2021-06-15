import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

export interface Event {
  id: string;
  name: string;
  author: string;
  date: string;
  time: string;
  slots: number;
}

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private httpClient: HttpClient) { }

  getEvents$(): Observable<Event[]> {
    return this.httpClient.get<Event[]>('/api/getAllEvents')
  }
  createEvent(): Observable<Event> {
     return this.httpClient.post<Event>('api/updateEvents', 
        {
          id: "HackaWin", 
          name: 'HackaWin',
          author: 'AngularNights', 
          date: '22/07/21', 
          time: '22:00',
          slots: '64'
        }
     );
  } 

}

