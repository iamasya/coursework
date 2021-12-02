import { Component, OnInit, Input } from '@angular/core';
import { INews } from '../interfaces/inews';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {

  @Input() news?:INews;


  
    newsList:INews[] = []

  constructor() { }

  ngOnInit(): void {
    fetch('assets/news.json')
    .then((response) => response.json())
    .then((json) => this.newsList = json);
  }

}
