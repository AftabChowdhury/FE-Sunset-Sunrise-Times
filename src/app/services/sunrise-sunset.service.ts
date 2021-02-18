import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SunriseSunsetService {

  constructor(private http: HttpClient) {
  }

  public sunSetsunRiseTimes(lat, lng){
    //http://localhost:8070/suntimes/36.7201600/4.4203400
    //return this.http.get("https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400");
    return this.http.get("http://localhost:8070/suntimes/"+lat+"/"+lng);
    //return this.http.get('http://localhost:8070/suntimes/36.7201600/4.4203400');
  }
}
