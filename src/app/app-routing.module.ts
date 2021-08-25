import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddDogComponent} from "./components/add-dog/add-dog.component";
import {EditComponent} from "./components/edit/edit.component";
import {MasterComponent} from "./components/layout/master/master.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {LoginComponent} from "./components/login/login.component";
import {AuthGuard} from "./guards/auth.guard";
import {ProfileComponent} from "./components/profile/profile.component";

const routes: Routes = [
  {
    path: 'dashboard',
    component: MasterComponent,
    children: [
      {
        path: 'list',
        component: DashboardComponent
      },
      {
        path: 'add-Dog',
        component: AddDogComponent
      },
      {
        path: 'list/:id/edit-Dog',
        component: EditComponent
      },
      {
        path: 'list/profile',
        component: ProfileComponent
      }
    ], canActivate: [AuthGuard]
  },
  {
    path: 'user-login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
