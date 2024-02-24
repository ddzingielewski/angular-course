import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import {COURSES} from '../db-data';
import { CourseCardComponent } from './course-card/course-card.component';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{

  courses = COURSES;
  // startDate = new Date(2000, 0, 1);
  // title = COURSES[0].description;
  // price = 9.99;
  @ViewChild ('cardRef', {read: ElementRef})
  card: CourseCardComponent;

  @ViewChild('container')
  containerDiv: ElementRef;

  @ViewChildren(CourseCardComponent, {read: ElementRef})
  cards: QueryList<CourseCardComponent>;

  ngAfterViewInit(): void {
    this.cards.changes.subscribe(value => console.log('value', value));
  }

  onCourseSelected(course: Course){
  }
  onCoursesEdit(){
    this.courses.push(
      {
        id: 1,
        description: "Angular Core Deep Dive",
        iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png',
        longDescription: "A detailed walk-through of the most important part of Angular - the Core and Common modules",
        category: 'INTERMEDIATE',
        lessonsCount: 10
    }
    )
  }

  trackCourse(index: number, cource: Course){
    return cource.id
  }

}
