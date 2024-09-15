import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { data } from '../../../core/data/home'; // Assuming data is a constant exported from home.ts

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NavBarComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  data: any; // Using any type for flexibility
  repeatCount = [1, 2, 3];
  constructor() {
    this.data = data; // Assign the imported data directly to this.data
  }
}
