import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CourseService {
  constructor(public http: Http) { }

  getCourses(id: number) {
    return this.http.get(`https://ab9la9wbm9.execute-api.us-east-1.amazonaws.com/v1/locations/${id}/courses`)
      .map(res => res.json());
  }
}
