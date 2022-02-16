import { AfterViewInit, Component, ContentChild, ElementRef, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { CourseImageComponent } from '../course-image/course-image.component';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit, AfterViewInit {

  @Input()
  course: Course;

  @Input('index')
  cardIndex: number;

  @Input()
  noImageTpl: TemplateRef<any>;

  @Output()
  courseSelected = new EventEmitter<Course>();

  @ContentChild(CourseImageComponent, {read: ElementRef})
  image: ElementRef;

  constructor() { }
  ngAfterViewInit(): void {
    console.log('image', this.image);
  }

  ngOnInit(): void {
  }

  onCourseViewed(){
    this.courseSelected.emit(this.course);
  }

  cardClasses(){
    return {
      'beginner': this.course.category === 'BEGINNER'
    }
  }

  cardStyles(){
    return {'background-image': 'url(' + this.course.iconUrl + ')'};
  }

}
