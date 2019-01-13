import { QuestionsListComponent } from './feature/questions/questions-list/questions-list.component';
import { QuestionsDetailsComponent } from './feature/questions/questions-details/questions-details.component';
import { Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'questionsList', component: QuestionsListComponent },
  { path: 'questions/:id', component: QuestionsDetailsComponent },

  {
    path: '',
    redirectTo: '/questionsList',
    pathMatch: 'full'
  },
  { path: '**', component: QuestionsListComponent }
];

export default appRoutes;
