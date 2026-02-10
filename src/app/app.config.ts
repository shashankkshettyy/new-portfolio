import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/page/about/about.component';
import { ProjectsComponent } from './components/page/projects/projects.component';
import { ContactComponent } from './components/page/contact/contact/contact.component';
import { SingleComponentComponent } from './components/single-component/single-component.component';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([
      { path: '', component: SingleComponentComponent },
      // { path: 'about', component: AboutComponent },
      // { path: 'projects', component: ProjectsComponent },
      // { path: 'contact', component: ContactComponent },
      { path: '**', redirectTo: '' }
    ])
  ]
};
