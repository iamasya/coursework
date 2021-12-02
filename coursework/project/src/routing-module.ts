import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GalleryComponent } from './app/gallery/gallery.component';
import { NewsComponent } from './app/news/news.component';
import { AppComponent } from './app/app.component';

const routes: Routes = [
  { path: 'Gallery', component: GalleryComponent },
  { path: 'News', component: NewsComponent },
  { path: 'Main', component: AppComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
