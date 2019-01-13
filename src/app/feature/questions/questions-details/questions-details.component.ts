import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DataService } from './../../../core';
@Component({
  selector: 'pa-questions-details',
  templateUrl: './questions-details.component.html',
  styleUrls: ['./questions-details.component.scss']
})
export class QuestionsDetailsComponent implements OnInit {
  private questionId: number;
  question: object = null;
  voteResult: object = null;
  totalVotes: number;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.questionId = +this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.dataService.getDataDetails(this.questionId).subscribe(
      res => {
        console.log(res);
        this.question = res;
        this.getTotalVotes(res.choices);
      },
      err => console.error(err)
    );
  }

  private getTotalVotes(array: any[]) {
    const reducer = (acc, cur) => acc + cur;
    this.totalVotes = array.map(item => item.votes).reduce(reducer);
  }

  getPercentage(number: number) {
    return Math.floor((number / this.totalVotes) * 100);
  }

  vote(url) {
    this.dataService.postChoice(url).subscribe(res => {
      this.voteResult = res;
      this.question = null;
      setTimeout(() => this.router.navigate(['']), 5000);
    });
  }
}
