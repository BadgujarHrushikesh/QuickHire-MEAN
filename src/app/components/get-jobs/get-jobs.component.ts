import { Component, OnInit } from '@angular/core';
import { JobsService } from '../../Services/jobs.service';
import { NgFor, NgIf } from '@angular/common';
import { CustomDatePipe } from '../../pipes/custom-date.pipe';

@Component({
  selector: 'app-get-jobs',
  standalone: true,
  imports: [NgIf,NgFor,CustomDatePipe],
  templateUrl: './get-jobs.component.html',
  styleUrl: './get-jobs.component.css'
})
export class GetJobsComponent implements OnInit {
  public Data: any[] = [];


  constructor(private getJobs: JobsService) { }

  ngOnInit(): void {
    this.getJobs.getLast15Jobs().subscribe(
      (data) => {
        this.Data = data.data;
        console.log(this.Data);
      },(error)=>{
        console.error('Error fetching jobs:', error);
      }
    );
  }


  
  selectedJob: any | null = null;
  openJobDetailsModal(job: any) {
    this.selectedJob = job;
  }
}
