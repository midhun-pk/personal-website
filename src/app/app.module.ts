import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { WorkComponent } from './work/work.component';
import { ContactComponent } from './contact/contact.component';
import { OtherWorksComponent } from './other-works/other-works.component';
import { SlideUpDirective } from './shared/slide-up.directive';
import { GithubComponent } from './shared/github-component';
import { LinkedInComponent } from './shared/linkedin-component';
import { FolderComponent } from './shared/folder-component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ExperienceComponent,
    WorkComponent,
    ContactComponent,
    OtherWorksComponent,
    GithubComponent,
    LinkedInComponent,
    FolderComponent,
    SlideUpDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    ScrollToModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
