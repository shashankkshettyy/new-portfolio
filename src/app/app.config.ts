import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { SingleComponentComponent } from './components/single-component/single-component.component';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([
      { path: '', component: SingleComponentComponent },
      { path: '**', redirectTo: '' }
    ])
  ]
};
