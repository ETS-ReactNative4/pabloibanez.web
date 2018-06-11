import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FooterComponent } from './sections/footer/footer.component';
import { ProfileComponent } from './sections/profile/profile.component';
import { ProjectsComponent } from './sections/projects/projects.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ProfileComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
