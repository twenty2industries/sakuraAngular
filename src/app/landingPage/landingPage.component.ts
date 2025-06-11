import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-landingPage',
  standalone: true,
  imports: [CommonModule],
  template: '<h1>Hallo Welt</h1>',
  styles: ['h1 {color: red;}']
})
export class LandingPageComponent {}
