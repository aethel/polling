import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionsListComponent } from './questions-list/questions-list.component';
import { QuestionsDetailsComponent } from './questions-details/questions-details.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [QuestionsListComponent, QuestionsDetailsComponent],
  imports: [CommonModule, RouterModule]
})
export class QuestionsModule {}
