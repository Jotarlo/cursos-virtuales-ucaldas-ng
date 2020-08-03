import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AreaListComponent } from './area/area-list/area-list.component'
import { AreaCreationComponent } from './area/area-creation/area-creation.component'
import { AreaEditionComponent } from './area/area-edition/area-edition.component'
import { FacultyListComponent } from './faculty/faculty-list/faculty-list.component';
import { FacultyCreationComponent } from './faculty/faculty-creation/faculty-creation.component';
import { FacultyEditionComponent } from './faculty/faculty-edition/faculty-edition.component';

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
  }, {
    path: 'faculty',
    component: FacultyListComponent
  },
  {
    path: 'faculty-creation',
    component: FacultyCreationComponent
  },
  {
    path: 'faculty-edition/:id',
    component: FacultyEditionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametersRoutingModule { }
