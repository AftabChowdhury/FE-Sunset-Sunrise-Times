import {Component} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {GoogleMapsComponent} from './components/google-maps/google-maps.component';
import {SunriseSunsetService} from './services/sunrise-sunset.service';

interface Coordinates {
  address: string;
  latitude: number;
  longitude: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ui-sunset-sunrise';

  coordinates: Coordinates;

  objResponseSunTimes: any;

  objResults: any;

  sunRise;
  sunSet;

  constructor(
    private modalService: NgbModal,
    private service: SunriseSunsetService
  ) {
    this.coordinates = {} as Coordinates;
  }

  openGoogelMapsModal() {
    const modalRef = this.modalService.open(GoogleMapsComponent,
      {
        scrollable: true,
      });
    let data = {
      prop1: 'Some Data',
      prop2: 'From Parent Component',
      prop3: 'This Can be anything'
    }

    modalRef.componentInstance.fromParent = data;
    modalRef.result.then((result) => {
      this.coordinates = result;
    }, (reason) => {
    });
  }

  showSunriseSunsetTimes() {
    this.service.sunSetsunRiseTimes(this.coordinates.latitude, this.coordinates.longitude).subscribe(res => {
      this.objResponseSunTimes = res;
      console.log(this.objResponseSunTimes);
      this.objResults = this.objResponseSunTimes.results;
      this.sunRise = this.objResults.sunrise;
      this.sunSet = this.objResults.sunset;
      console.log("sunRise: ", this.sunRise);
      console.log("sunSet: ", this.sunSet);
    });
  }

}
