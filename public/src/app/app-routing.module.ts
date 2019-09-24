import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PartyComponent } from './party/party.component'
import { AppComponent } from './app.component';


const routes: Routes = [
  {
    path: 'party/:id',
    component: PartyComponent
  },
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   component: AppComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
