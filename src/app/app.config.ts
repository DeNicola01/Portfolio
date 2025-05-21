import { provideRouter } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { ProjectsComponent } from './pages/projects/projects.component';

export const appConfig = {
  providers: [
    provideRouter([
      { path: '', component: HomeComponent },
      { path: 'projects', component: ProjectsComponent},
      { path: 'sobre', component: SobreComponent },
    ])
  ]
};
