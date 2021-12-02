import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bannergal',
  templateUrl: './bannergal.component.html',
  styleUrls: ['./bannergal.component.scss']
})
export class BannergalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    wind();

    window.addEventListener('resize', wind);

    function wind(){
      let links = document.getElementById("links");
      let windowWidth = document.documentElement.clientWidth;
      if(windowWidth < 900){
          links!.style.display = "grid"
          links!.style.gridTemplateRows = "auto"
          links!.style.marginTop = "0px";
      }
      else{
          links!.style.display = "flex"
          links!.style.marginTop = "100px";
          links!.style.justifyContent = "auto"
      }
    }

    let open = false;

    let dropdown = document.getElementById("linkDown");
    let downContent = document.getElementById("dropdown-content");
    let arrow = document.getElementById("Anim");
    dropdown!.addEventListener("click", function(){
      if(open){
        arrow!.style.transform = "rotate(-0deg)"
        arrow!.style.transition = "0.2s"
        dropdown!.style.boxShadow = "";
        dropdown!.style.backgroundColor = "";
        dropdown!.style.height = "35px";
        downContent!.style.display = "none";
        dropdown!.style.transition = "0.3s"
      }
      else{  
        arrow!.style.transform = "rotate(-180deg)"
        arrow!.style.transition = "0.2s"
        dropdown!.style.height = "400px";
        dropdown!.style.backgroundColor = "#9CC892"
        dropdown!.style.boxShadow = "3px 3px 0px 0px #4b6b44";
        dropdown!.style.transition = "0.15s"
        window.setTimeout(function(){downContent!.style.display = "grid";}, 200);
      }
      open = !open;
      window.setTimeout(function(){arrow!.style.transition = "0s"}, 200);
    })
    
  }

}
