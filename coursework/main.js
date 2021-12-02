wind();


let main = document.getElementById("IndexMain");
fetch('news.json')
.then((response) => response.json())
.then(function appendNews(json) {
    for (let i = json.length -1 ; i >= 0; i = i-1) {
        let news = document.createElement("div");
        news.className = "new";
        news.innerHTML = `<time>` + json[i].time + `</time>
        <a href="` + json[i].link + `"><h1>` + json[i].title + `</h1></a>
        <div class="mainImage"><img src="` + json[i].imageurl + `"></div>
        <p>` + json[i].text + `</p>
        <a href="` + json[i].link + `">Дізнатися більше ▶</a></p>`;
        console.log(news)
        main.append(news);
        
        let line = document.createElement("div");
        line.className = "line";
        main.append(line);
    }
    let photoMain = document.getElementsByClassName("mainImage");
    for (let i = 0; i < photoMain.length; i++){
        photoMain[i].addEventListener("click", function(){openPicture(photoMain, i)})
    }
});


let open = false;

let dropdown = document.getElementById("linkDown");
let downContent = document.getElementById("dropdown-content");
let arrow = document.getElementById("Anim");
dropdown.addEventListener("click", function(){

    if(open){
        arrow.style.transform = "rotate(-0deg)"
        arrow.style.transition = "0.2s"
        dropdown.style.boxShadow = "";
        dropdown.style.backgroundColor = "";
        dropdown.style.height = "35px";
        downContent.style.display = "none";
        dropdown.style.transition = "0.3s"
    }
    else{  
        arrow.style.transform = "rotate(-180deg)"
        arrow.style.transition = "0.2s"
        dropdown.style.height = "400px";
        dropdown.style.backgroundColor = "#9CC892"
        dropdown.style.boxShadow = "3px 3px 0px 0px #4b6b44";
        dropdown.style.transition = "0.15s"
        window.setTimeout(function(){downContent.style.display = "grid";}, 200);
    }
    open = !open;
    window.setTimeout(function(){arrow.style.transition = "0s"}, 200);
})




window.addEventListener('resize', wind);

function wind(){
    let links = document.getElementById("links");
    let windowWidth = document.documentElement.clientWidth;
    if(windowWidth < 900){
        links.style.display = "grid"
        links.style.gridTemplateRows = "auto"
        links.style.marginTop = "0px";
    }
    else{
        links.style.display = "flex"
        links.style.marginTop = "100px";
        links.style.justifyContent = "auto"
    }
}



function openPicture(pic, ind){
    let newWhole = document.createElement("div");
    newWhole.className = "openImg";
    let newInner = `<div class="exitBtn" id="exitBtn">✖</div>` + pic[ind].innerHTML;
    newWhole.innerHTML = `<div class="prevBtn" id="prevBtn">◀</div>`+newInner+`<div class="nextBtn" id="nextBtn">▶</div>`;
    let exit = document.getElementsByClassName("exitBtn");
    let prev = document.getElementsByClassName("prevBtn");
    let next = document.getElementsByClassName("nextBtn");
    document.body.append(newWhole);
    console.log("work")
    let scrollTop = document.documentElement.scrollTop;
    let scrollLeft = document.documentElement.scrollLeft;
    if(ind == 0){
        prev[0].style.display = "none";
    }
    if(ind == pic.length - 1){
        next[0].style.display = "none";
    }
    window.onscroll = function() {
        window.scrollTo(scrollLeft, scrollTop);
    };
    exit[0].addEventListener("click", function(){
        newWhole.remove();
        window.onscroll = function() {};
    })
    if(ind < pic.length - 1){
        next[0].addEventListener("click", function(){
            newWhole.remove();
            openPicture(pic, ind+1)
        })
    }
    if(ind > 0){
        prev[0].addEventListener("click", function(){
            newWhole.remove();
            openPicture(pic, ind-1)
        })
    }
}



