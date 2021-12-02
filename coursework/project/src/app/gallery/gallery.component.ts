import { Component, Input, OnInit } from '@angular/core';
import { IGallery } from '../interfaces/igallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit{

    @Input() gallery?:IGallery;
    picList:IGallery[] = []

    constructor() { }

    ngOnInit(): void {
      fetch('assets/gallery.json')
      .then((response) => response.json())
      .then((json) => this.picList = json);

      
    }
}
