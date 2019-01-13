import { Component, OnInit } from '@angular/core';
import { DataService } from './../../../core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'pa-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.scss']
})
export class QuestionsListComponent implements OnInit {
  questionsList$: any;
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.questionsList$ = this.dataService.getData();
  }
}
