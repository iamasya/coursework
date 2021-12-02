import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { ContainerComponent } from './container/container.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { BannergalComponent } from './bannergal/bannergal.component';
import { BannernewsComponent } from './bannernews/bannernews.component';
import { NewsoneComponent } from './newsone/newsone.component';
import { RouterModule, Routes } from '@angular/router';
import { NewsOpenDayComponent } from './news-open-day/news-open-day.component';
import { NewsChallengeITComponent } from './news-challenge-it/news-challenge-it.component';
import { NewsConferenceComponent } from './news-conference/news-conference.component';
import { NewsConferenceWhenComponent } from './news-conference-when/news-conference-when.component';
import { NewsScienceDayComponent } from './news-science-day/news-science-day.component';
import { NewsListComponent } from './news-list/news-list.component';
import { PicComponent } from './pic/pic.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    ContainerComponent,
    GalleryComponent,
    BannerComponent,
    FooterComponent,
    BannergalComponent,
    BannernewsComponent,
    NewsoneComponent,
    NewsOpenDayComponent,
    NewsChallengeITComponent,
    NewsConferenceComponent,
    NewsConferenceWhenComponent,
    NewsScienceDayComponent,
    NewsListComponent,
    PicComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
