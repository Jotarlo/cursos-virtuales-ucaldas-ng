import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AreaListComponent } from './area/area-list/area-list.component'
import { AreaCreationComponent } from './area/area-creation/area-creation.component'
import { AreaEditionComponent } from './area/area-edition/area-edition.component'
import { AreaRemoveComponent } from './area/area-remove/area-remove.component'
import { FacultyListComponent } from './faculty/faculty-list/faculty-list.component';
import { FacultyCreationComponent } from './faculty/faculty-creation/faculty-creation.component';
import { FacultyEditionComponent } from './faculty/faculty-edition/faculty-edition.component';
import { CourseListComponent } from './course/course-list/course-list.component';
import { CourseCreationComponent } from './course/course-creation/course-creation.component';
import { CourseEditionComponent } from './course/course-edition/course-edition.component';


const routes: Routes = [
  {
    path: 'area',
    component: AreaListComponent
  },
  {
    path: 'area-creation',
    component: AreaCreationComponent
  },
  {
    path: 'area-edition/:id',
    component: AreaEditionComponent
  },
  {
    path: 'area-remove',
    component: AreaRemoveComponent
  }, {
    path: 'faculty',
    component: FacultyListComponent
  },
  {
    path: 'faculty-creation',
    component: FacultyCreationComponent
  },
  {
    path: 'faculty-edition',
    component: FacultyEditionComponent
  },
  {
    path: 'course',
    component: CourseListComponent
  },
  {
    path: 'course-creation',
    component: CourseCreationComponent
  },
  {
    path: 'course-edition',
    component: CourseEditionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametersRoutingModule { }
