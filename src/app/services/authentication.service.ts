import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
 
@Injectable()
export class AuthenticationService {
 
  // Observable string sources
  private token = new Subject<any>();
  storedToken: any;
 
  // Observable string streams
  token$ = this.token.asObservable();
 
    constructor(private http: Http){

    }

  // Service message commands
  setToken(): Observable<any> {
    let url = 'https://hsz2lc6tzb.execute-api.us-west-2.amazonaws.com/Dev/v1/token/authenticate';
    let headers = new Headers({
        'clientkey' : 'Chris',
        'clientsecret' : 'Michelle',
    });
    let options = new RequestOptions({headers: headers});

    return this.http.post(url, 'nothing', options).map((response: any) => {
        let token = JSON.parse(response._body).data;
        this.storedToken = response.json;
        this.token.next(response.json);
        return token;
    });
  }
}