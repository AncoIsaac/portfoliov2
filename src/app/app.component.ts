import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    ProfileComponent,
    ExperienceComponent,
    ProjectsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
