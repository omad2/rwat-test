// main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/home/home.component';
import { DetailsComponent } from './app/details/details.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: 'home', component: HomeComponent },
      { path: 'details', component: DetailsComponent }
    ])
  ]
})
.catch(err => console.error(err));
