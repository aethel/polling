import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DataService } from './../../../core';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'pa-questions-details',
  templateUrl: './questions-details.component.html',
  styleUrls: ['./questions-details.component.scss']
})
export class QuestionsDetailsComponent implements OnInit {
  question$: any;
  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    //call for questions details
  }
}
