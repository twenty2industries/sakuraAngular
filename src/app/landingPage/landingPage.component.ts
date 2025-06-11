import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-landingPage',
  standalone: true,
  imports: [CommonModule],
  template: `
  <section>
    <h1>SAKURA RAMEN</h1>
    <h2>BEST RAMEN IN TOWN</h2>
  </section>
  `,
  styleUrls: ['./landingPage.components.scss']
})
export class LandingPageComponent {}
