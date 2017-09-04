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
  locationLoading: boolean;
  courseLoading: boolean;
  disciplineLoading: boolean;

  constructor(private locationService: LocationService, private courseService: CourseService,
              private disciplineService: DisciplineService) { }

  ngOnInit() {
    this.locationLoading = true;
    this.locationService.getLocations().subscribe((locations) => {
      this.locations = this.ordenar(locations['Items'], 'nome');
      this.locationLoading = false;
    });
  }

  loadCourses(location: Location) {
    this.courseLoading = true;
    // Limpar o valor dos outros campos
    this.selectedCourse = undefined;
    this.selectedDiscipline = undefined;

    this.courseService.getCourses(location.id).subscribe((courses) => {
      this.courses = this.ordenar(courses['Items'], 'name');
      this.courseLoading = false;
    });

  }

  loadDisciplines(course: Course) {
    this.disciplineLoading = true;
    // Limpar o valor dos outros campos
    this.selectedDiscipline = undefined;

    this.disciplineService.getDisciplines(this.selectedLocation.id, course.id).subscribe((disciplines) => {
      this.disciplines = this.ordenar(disciplines['Items'], 'discipline_name');
      this.disciplineLoading = false;
    });
  }

  ordenar(array: any[], attributeName: string) {
    return array.sort(function(a, b) {
      return (a[attributeName] > b[attributeName]) ? 1 : ((b[attributeName] > a[attributeName]) ? -1 : 0);
    });
  }
}
