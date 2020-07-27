import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametersRoutingModule } from './parameters-routing.module';
import { AreaCreationComponent } from './area/area-creation/area-creation.component';
import { AreaEditionComponent } from './area/area-edition/area-edition.component';
import { AreaListComponent } from './area/area-list/area-list.component';
import { CourseCreationComponent } from './course/course-creation/course-creation.component';
import { CourseEditionComponent } from './course/course-edition/course-edition.component';
import { CourseListComponent } from './course/course-list/course-list.component';
import { FacultyCreationComponent } from './faculty/faculty-creation/faculty-creation.component';
import { FacultyEditionComponent } from './faculty/faculty-edition/faculty-edition.component';
import { FacultyListComponent } from './faculty/faculty-list/faculty-list.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSpinnerModule } from "ngx-spinner";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AreaCreationComponent, AreaEditionComponent, AreaListComponent, CourseCreationComponent, CourseEditionComponent, CourseListComponent, FacultyCreationComponent, FacultyEditionComponent, FacultyListComponent],
  imports: [
    CommonModule,
    ParametersRoutingModule,
    NgxPaginationModule,
    NgxSpinnerModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ParametersModule { }
