import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddDogComponent} from "./components/add-dog/add-dog.component";
import {EditComponent} from "./components/edit/edit.component";
import {MasterComponent} from "./components/layout/master/master.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";

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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
