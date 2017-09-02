import { Component, OnInit } from '@angular/core';

import { CourseService } from './services/course.service';
import { LocationService } from './services/location.service';

import { Course } from './models/course';
import { Location } from './models/location';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  courses: Course[];
  locations: Location[];
  showCourses = false;

  constructor(private locationService: LocationService, private courseService: CourseService) { }

  ngOnInit() {
    this.locationService.getLocations().subscribe((locations) => {
      this.locations = locations['Items'];
    });
  }

  loadCourses(location: Location) {
    this.showCourses = true;
    this.courseService.getCourses(location.id).subscribe((courses) => {
      this.courses = courses['Items'];
    });
  }
}
