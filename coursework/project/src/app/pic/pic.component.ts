import { PathLocationStrategy } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IGallery } from '../interfaces/igallery';

@Component({
  selector: 'app-pic',
  templateUrl: './pic.component.html',
  styleUrls: ['./pic.component.scss']
})
export class PicComponent implements OnInit {

  @Input() gallery?:IGallery;
  
  constructor() { }

  ngOnInit(): void {
  

  }

}
