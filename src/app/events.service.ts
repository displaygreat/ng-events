import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

export interface Event {
  id: string;
  name: string;
  author: string;
  date: string;
  time: string;
  counter: number;
}

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private httpClient: HttpClient) { }

  getEvents$(): Observable<Event[]> {
    return this.httpClient.get<Event[]>('/api/getAllEvents')
  }

}

