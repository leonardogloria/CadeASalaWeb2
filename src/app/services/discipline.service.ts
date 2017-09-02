import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DisciplineService {
  constructor(public http: Http) { }

  getDisciplines(idLocation: number, idCourse: number) {
    return this.http.get(`https://ab9la9wbm9.execute-api.us-east-1.amazonaws.com/v1/locations/${idLocation}/courses/${idCourse}/course_disciplines`)
      .map(res => res.json());
  }
}
