import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseListComponent } from './admin/course-list/course-list.component';
import { CourseCreationComponent } from './admin/course-creation/course-creation.component';
import { CourseEditionComponent } from './admin/course-edition/course-edition.component';
import { SectionListComponent } from './sections/section-list/section-list.component';
import { SectionCreationComponent } from './sections/section-creation/section-creation.component';
import { SectionEditionComponent } from './sections/section-edition/section-edition.component';

const routes: Routes = [
  {
    path: 'course-list',
    component: CourseListComponent
  },
  {
    path: 'course-creation',
    component: CourseCreationComponent
  },
  {
    path: 'course-edition/:id',
    component: CourseEditionComponent
  },
  {
    path: 'section-list',
    component: SectionListComponent
  },
  {
    path: 'section-creation',
    component: SectionCreationComponent
  },
  {
    path: 'section-edition/:id',
    component: SectionEditionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
