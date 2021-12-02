import { Component, OnInit, Input } from '@angular/core';
import { INews } from '../interfaces/inews';

@Component({
  selector: 'app-newsone',
  templateUrl: './newsone.component.html',
  styleUrls: ['./newsone.component.scss']
})
export class NewsoneComponent implements OnInit {


  @Input() news?:INews;

  constructor() { }

  ngOnInit(): void {

    
    
    
  }

}
