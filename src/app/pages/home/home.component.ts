import { Component } from '@angular/core';

import { SliderComponent } from '../../components/slider/slider.component';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { JobTableComponent } from '../../components/job-table/job-table.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SliderComponent,SearchBarComponent,JobTableComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
