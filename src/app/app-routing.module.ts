import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './public/home/default/default.component';
import { AuthenticatedAdminGuard } from './guards/authenticated-admin.guard';

const routes: Routes = [
  {
    path: 'home',
    component: DefaultComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: 'security',
    loadChildren: () => import('./modules/security/security.module').then(m => m.SecurityModule)
  },
  {
    path: 'students',
    loadChildren: () => import('./modules/students/students.module').then(m => m.StudentsModule)
  },
  {
    path: 'parameters',
    loadChildren: () => import('./modules/parameters/parameters.module').then(m => m.ParametersModule),
    canActivate: [AuthenticatedAdminGuard]
  },
  {
    path: 'courses',
    loadChildren: () => import('./modules/courses/courses.module').then(m => m.CoursesModule),
    canActivate: [AuthenticatedAdminGuard]
  },

  /** This option always may be at the end */
  {
    path: '**',
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
