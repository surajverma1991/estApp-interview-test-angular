import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecondFormComponent } from "src/app/second-form/second-form.component";
import { AppComponent } from "src/app/app.component";
import { FirstFormComponent } from "src/app/first-form/first-form.component";


const routes: Routes = [
  { path: 'second', component: SecondFormComponent },
  { path: 'first', component: FirstFormComponent},
  { path: '', redirectTo: '/first', pathMatch: 'full' },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
