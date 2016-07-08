import { Injectable }    from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class BaconService {
    
    private baconsUrl = 'https://baconipsum.com/api/?type=meat-and-filler';  // URL to web api
    
    constructor(private http: Http) { }
    
    getBacons(): Observable<Array<string>> {
        return this.http.get(this.baconsUrl)
        .map(this.extractData)
        .catch(this.handleError);
    }

    private extractData(res: Response) {
        return res.json();
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
    }
}