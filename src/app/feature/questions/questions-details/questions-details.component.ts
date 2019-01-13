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
  private questionId: number;
  question: object = null;

  constructor(private dataService: DataService, private route: ActivatedRoute) {
    this.questionId = +this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.dataService
      .getDataDetails(this.questionId)
      .subscribe(res => (this.question = res), err => console.log(err));
  }
}
