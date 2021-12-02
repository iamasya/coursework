import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bannernews',
  templateUrl: './bannernews.component.html',
  styleUrls: ['./bannernews.component.scss']
})
export class BannernewsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    wind();

    window.addEventListener('resize', wind);

    function wind(){
      let link = document.getElementById("linkBack");
      let windowWidth = document.documentElement.clientWidth;
      if(windowWidth < 900){
        link!.style.display = "flex"
        link!.style.justifyContent = "center"
      }
      else{
        link!.style.display = "block"
      }
    }
  }

}
