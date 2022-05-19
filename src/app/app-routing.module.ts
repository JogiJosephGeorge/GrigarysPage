import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhoneListComponent } from './phone-list/phone-list.component';
import { MyPipeSamplesComponent } from './my-pipe-samples/my-pipe-samples.component';
const routes: Routes = [{ path: 'phonelist', component: PhoneListComponent }, { path: 'MyPipeSamples', component: MyPipeSamplesComponent },];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
