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
      this.locations = locations['Items'].sort(function(a, b) {
        return (a.nome > b.nome) ? 1 : ((b.nome > a.nome) ? -1 : 0);
      });
    });
  }

  loadCourses(location: Location) {
    // Limpar o valor dos outros campos
    this.selectedCourse = undefined;
    this.selectedDiscipline = undefined;

    this.courseService.getCourses(location.id).subscribe((courses) => {
      this.courses = courses['Items'].sort(function(a, b) {
        return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);
      });
    });

  }

  ordenar() {
    this.courses = this.courses.sort(function(a, b) {return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0); } );
  }

  loadDisciplines(course: Course) {
    // Limpar o valor dos outros campos
    this.selectedDiscipline = undefined;

    this.disciplineService.getDisciplines(this.selectedLocation.id, course.id).subscribe((disciplines) => {
      this.disciplines = disciplines['Items'].sort(function(a, b) {
        return (a.discipline_name > b.discipline_name) ? 1 : ((b.discipline_name > a.discipline_name) ? -1 : 0);
      });
    });
  }
}
