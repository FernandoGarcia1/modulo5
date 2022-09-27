import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { EnrollComponent } from './pages/enroll/enroll.component';
import { NotFoundComponent } from '../../shared/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    children : [
      {
        path : 'login',
        component : LoginComponent
      },
      {
        path : 'enroll/:id',
        component : EnrollComponent
      },
      {
        path : '**',
        redirectTo : 'login'
      }
    ]
  }
];

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
