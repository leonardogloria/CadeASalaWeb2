import { Component, OnInit } from '@angular/core';

import { CourseService } from './services/course.service';
import { DisciplineService } from './services/discipline.service';
import { LocationService } from './services/location.service';

import { Course } from './models/course';
import { Discipline } from './models/discipline';
import { Location } from './models/location';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  locations: Location[];
  courses: Course[];
  disciplines: Discipline[];
  idLocation: number;
  showCourses = false;
  showDisciplines = false;

  constructor(private locationService: LocationService, private courseService: CourseService,
              private disciplineService: DisciplineService) { }

  ngOnInit() {
    this.locationService.getLocations().subscribe((locations) => {
      this.locations = locations['Items'];
    });
  }

  loadCourses(location: Location) {
    this.idLocation = location.id;
    this.showCourses = true;
    this.courseService.getCourses(location.id).subscribe((courses) => {
      this.courses = courses['Items'];
    });
  }

  loadDisciplines(course: Course) {
    this.showDisciplines = true;
    this.disciplineService.getDisciplines(this.idLocation, course.id).subscribe((disciplines) => {
      this.disciplines = disciplines['Items'];
    });
  }

  showInfo(discipline: Discipline) {
  }
}
