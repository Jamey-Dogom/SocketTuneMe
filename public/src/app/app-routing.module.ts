import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PartyComponent } from './party/party.component'
import { WelcomeComponent } from './welcome/welcome.component';



const routes: Routes = [
  {
    path: ':key/:socket',
    component: PartyComponent
  },
  {
    path: '',
    component: WelcomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
