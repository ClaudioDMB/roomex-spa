import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserFormComponent } from './user-form/user-form.component';

const routes: Routes = [
  {
    path: 'enter',
    component: UserFormComponent,
    title: 'enter',
  },
  {
    path: 'thankyou',
    component: UserDetailComponent,
    title: 'thank you',
  },
  {
    path: '',
    redirectTo: 'enter',
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
