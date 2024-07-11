import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobsService {
 private getLast15JobsURL = 'http://localhost:8000/api/Jobs/getJobs'
  constructor(private http: HttpClient) { }


  getLast15Jobs(): Observable<any> {
    return this.http.get(this.getLast15JobsURL);
  }
}
