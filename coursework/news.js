wind();

window.addEventListener('resize', wind);

function wind(){
    let link = document.getElementById("linkBack");
    let windowWidth = document.documentElement.clientWidth;
    if(windowWidth < 900){
        link.style.display = "flex"
        link.style.justifyContent = "center"
    }
    else{
        link.style.display = "block"
    }
}

let photo = document.getElementsByClassName("newsImage");


for (let i = 0; i < photo.length; i++){
    photo[i].addEventListener("click", function(){openPicture(photo, i)})
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
