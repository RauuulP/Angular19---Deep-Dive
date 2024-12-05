import { AfterContentInit, AfterViewInit, Component, ContentChild, ContentChildren, ElementRef, EventEmitter, Input, OnInit, Output, QueryList, TemplateRef, ViewChild } from "@angular/core";
import { Course } from "../model/course";
import { CommonModule } from "@angular/common";
import { CourseImageComponent } from "../course-image/course-image.component";

@Component({
  selector: "course-card",
  imports: [CommonModule],
  templateUrl: "./course-card.component.html",
  styleUrls: ["./course-card.component.css"],
})
export class CourseCardComponent implements OnInit, AfterViewInit, AfterContentInit {


  @Input({
    required: true,
  })
  course: Course;

  @Input()
  noImageTpl: TemplateRef<any>


  @Input()
  index: number;

  @Input()
  cardIndex: number;

  @Output("courseSelected")
  courseEmitter = new EventEmitter<Course>();

  @ContentChildren(CourseImageComponent, {read: ElementRef})
  images: QueryList<ElementRef>;

  ngOnInit() {}

  ngAfterViewInit() {
  }

  ngAfterContentInit() {
    console.log(this.images);
    
  }

  isImageVisible() {
    return this.course && this.course.iconUrl;
  }

  onCourseViewed() {
    this.courseEmitter.emit(this.course);
  }

}
