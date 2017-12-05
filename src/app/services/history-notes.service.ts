import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { IHistoryNote } from '../models/historyNote'

@Injectable()
export class HistoryNotesService {

    // Observable string sources
    private historyNotesSubject = new Subject<IHistoryNote[]>();  
    // Observable string streams
    historyNotes$ = this.historyNotesSubject.asObservable();
    storedHistoryNotes: IHistoryNote[];
  
    private _accountsrUrl = './api/accounts/historynotes.json';
    private _vpnUrl: string = 'http://dev.intsvc.nelnet.net/HistoryNote/api/v1/historynotes/14/1/';
    private _vpnUrlGuid: string = '/abeeson?requestId=05e34bbb-d872-4002-92fb-41598ae1e688&count=20';

    constructor(private _http: HttpClient) { }

    setHistoryNotes(ssn: string){
      this._http.get<IHistoryNote[]>(this._vpnUrl + ssn + this._vpnUrlGuid).catch(this.handleError).subscribe(data => {
        this.storedHistoryNotes = data;
        this.historyNotesSubject.next(data);  
      })
    }
  
    private handleError(err: HttpErrorResponse){
      console.log(err.message)
      return Observable.throw(err.message);
    }
}
