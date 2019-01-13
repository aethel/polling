import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core';
@Component({
  selector: 'pa-questions-details',
  templateUrl: './questions-details.component.html',
  styleUrls: ['./questions-details.component.scss']
})
export class QuestionsDetailsComponent implements OnInit {
  constructor(private dataService: DataService) {}

  ngOnInit() {}
}
