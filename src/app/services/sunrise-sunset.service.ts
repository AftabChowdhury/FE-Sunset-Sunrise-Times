import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SunriseSunsetService {
  serverUrl = 'http://localhost:8070/';

  constructor(private http: HttpClient) {
  }

  public sunSetsunRiseTimes(lat, lng){
    //http://localhost:8070/suntimes/36.7201600/4.4203400
    return this.http.get(this.serverUrl + 'suntimes/' + lat + '/' + lng);
  }
}
