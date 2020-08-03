import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CourseCreationComponent } from './admin/course-creation/course-creation.component';
import { CourseEditionComponent } from './admin/course-edition/course-edition.component';
import { CourseListComponent } from './admin/course-list/course-list.component';
import { SectionCreationComponent } from './sections/section-creation/section-creation.component';
import { SectionEditionComponent } from './sections/section-edition/section-edition.component';
import { SectionListComponent } from './sections/section-list/section-list.component';
import { CoursesHomeListComponent } from './public/courses-home-list/courses-home-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [CourseCreationComponent, CourseEditionComponent, CourseListComponent, SectionCreationComponent, SectionEditionComponent, SectionListComponent, CoursesHomeListComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    NgxPaginationModule
  ]
})
export class CoursesModule { }
