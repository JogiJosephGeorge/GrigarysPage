import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhoneListComponent } from './phone-list/phone-list.component';
import { HeaderComponent } from './header/header.component';
import { MyPipeSamplesComponent } from './my-pipe-samples/my-pipe-samples.component';

@NgModule({
  declarations: [
    AppComponent,
    PhoneListComponent,
    HeaderComponent,
    MyPipeSamplesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
