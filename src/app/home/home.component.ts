import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LeadingComment } from '@angular/compiler';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public tasks: Task[] = [];
  public dataLoaded = false;

  constructor(private http: HttpClient) { }

  getList(): Observable<{data: Task[]}> {
    return this.http.get<{data: Task[]}>('http://localhost:8000/api/list');
  }

  ngOnInit(): void {
    this.getList().subscribe((data) => {
      this.tasks = data.data;
      this.dataLoaded = true;

      for (var i = 0; i < this.tasks.length; i++) {
        console.log(this.tasks[i].name, this.tasks[i].id);
      }
    });
  }

}
