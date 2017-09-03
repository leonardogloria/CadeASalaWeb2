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
  selectedLocation: Location;
  selectedCourse: Course;
  selectedDiscipline: Discipline;

  constructor(private locationService: LocationService, private courseService: CourseService,
              private disciplineService: DisciplineService) { }

  ngOnInit() {
    this.locationService.getLocations().subscribe((locations) => {
      this.locations = locations['Items'];
    });
  }

  loadCourses(location: Location) {
    // Limpar o valor dos outros campos
    this.selectedCourse = undefined;
    this.selectedDiscipline = undefined;

    this.courseService.getCourses(location.id).subscribe((courses) => {
      this.courses = courses['Items'];
    });
  }

  loadDisciplines(course: Course) {
    // Limpar o valor dos outros campos
    this.selectedDiscipline = undefined;

    this.disciplineService.getDisciplines(this.selectedLocation.id, course.id).subscribe((disciplines) => {
      this.disciplines = disciplines['Items'];
    });
  }
}
