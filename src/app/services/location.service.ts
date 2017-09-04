import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LocationService {
  private locationsUrl = 'https://ab9la9wbm9.execute-api.us-east-1.amazonaws.com/v1/locations';

  constructor(public http: Http) { }

  getLocations() {
    return this.http.get(this.locationsUrl)
      .map(res => res.json());
  }
}
