import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LandingPageComponent } from './landingPage/landingPage.component';
import { NavbarComponent } from './landingPage/navbar/navbar.component';


@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, LandingPageComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sakura';
}
