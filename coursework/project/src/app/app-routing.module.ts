import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GalleryComponent } from './gallery/gallery.component';
import { NewsComponent } from './news/news.component';
import { AppComponent } from './app.component';
import { NewsChallengeITComponent } from './news-challenge-it/news-challenge-it.component';
import { NewsConferenceComponent } from './news-conference/news-conference.component';
import { NewsOpenDayComponent } from './news-open-day/news-open-day.component';
import { NewsScienceDayComponent } from './news-science-day/news-science-day.component';
import { NewsConferenceWhenComponent } from './news-conference-when/news-conference-when.component';

const routes: Routes = [
  { path: 'Gallery', component: GalleryComponent },
  { path: '', component: NewsComponent },
  { path: 'ChallengeIT', component: NewsChallengeITComponent },
  { path: 'Conference', component: NewsConferenceComponent },
  { path: 'ConferenceWhen', component: NewsConferenceWhenComponent },
  { path: 'OpenDay', component: NewsOpenDayComponent },
  { path: 'ScienceDay', component: NewsScienceDayComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
