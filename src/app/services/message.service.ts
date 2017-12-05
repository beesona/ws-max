import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
 
@Injectable()
export class MessageService {
 
  // Observable string sources
  private message = new Subject<any>();
  storedMessage: any;
 
  // Observable string streams
  message$ = this.message.asObservable();
 
  // Service message commands
  setMessage(msg: any) {
    this.storedMessage = msg;
    this.message.next(msg);
  }
}