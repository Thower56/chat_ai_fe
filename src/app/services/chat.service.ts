import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Message } from '../shared/message.model';

@Injectable({ providedIn: 'root' })
export class ChatService {
  getMessages(): Observable<Message[]> {
    // Replace with real API call
    return of([]);
  }
}
