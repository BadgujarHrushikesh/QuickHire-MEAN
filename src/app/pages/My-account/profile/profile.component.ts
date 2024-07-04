import { NgIf, CommonModule } from '@angular/common';
import { TagInputModule } from 'ngx-chips';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Component, OnInit,HostBinding } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    NgIf,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TagInputModule
  ],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  
})
export class ProfileComponent implements OnInit {

  @HostBinding('attr.ngSkipHydration') ngSkipHydration = '';  // this is used for to skip the default angular hydration 

  public userType: string = "Job Hunter";
  public items: string[] = [];

  constructor() {}

  ngOnInit() {
    this.logItems();
  }

  onItemsChange(event: any) {
    this.items = event.map((item: any) => item.value || item);
    this.logItems();
  }

  private logItems() {
    console.log(this.items);
  }
}

