import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
 
@Injectable()
export class MessageService {
 
  // Observable string sources
  private message = new Subject<any>();
  private searchSsn = new Subject<string>();
  storedMessage: any;
  storedSearchSsn: string = '';
 
  // Observable string streams
  message$ = this.message.asObservable();
  searchSsn$ = this.searchSsn.asObservable();
 
  // Service message commands
  setMessage(msg: any) {
    this.storedMessage = msg;
    this.message.next(msg);
  }
  setSearchSsn(ssn: string){
    this.storedSearchSsn = ssn;
    this.searchSsn.next(ssn);
  }
}