import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';


@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  template: `
  <section>
    <div><app-navbar></app-navbar></div>
    <h1 class="fontRaleway">SAKURA RAMEN</h1>
    <h2>BEST RAMEN IN TOWN</h2>
  </section>
  `,
  styleUrls: ['./landingPage.components.scss']
})
export class LandingPageComponent {}
