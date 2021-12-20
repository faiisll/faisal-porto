let navMenu = document.querySelectorAll(".nav-item");
let section = document.querySelectorAll(".section");
function resetActiveNav(){
  for(var i = 0; i < navMenu.length; i++){
    navMenu[i].classList.remove("active");
  }
}


function scrollSpy(position){
  let hero = document.getElementById("home");
  let works = document.getElementById("works");

  
  for(var i = 0; i < section.length; i++){
    if(section[i].scrollTop <= position){
      resetActiveNav();
      section[i].classList.add("active");

    }
  }
}


const portos = document.getElementById("portos");
let html = "";
porto.map( p => {
  html += `

    <div class="porto-slider">
      <img
        src="assets/porto/${p.img}"
        alt=""
        class="porto-slider-img"
      />
      <div class="porto-slider-description">
        <h1 class="porto-slider-h1">${p.title}</h1>
        <div class="porto-slider-tech">
          ${p.tech.map( (t) => `<img src="assets/tech/${t}.png" width="32px" alt="${t}" />`).join("")}
          
        </div>
        <p>${p.desc}</p>
        <div class="porto-slider-footer">
          <a href="${p.live}" class="btn btn-primary">Live</a>
          <a href="${p.source}" class="btn btn-light">Source Code</a>
        </div>
      </div>
    </div>

  `;
});

portos.innerHTML = html;

AOS.init();


let navbar = document.getElementsByClassName("navbar")[0];
navbar.style.boxShadow = 
  window.scrollY > 100
    ? "0px 4px 16px -6px rgba(189,189,189,0.78)"
    : "0px 4px 16px -200px rgba(189,189,189,0.78";

window.addEventListener("scroll", function (e) {
  var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
  if (this.scrollY > 100) {
    navbar.style.backgroundColor = "rgba(255,255,255, 1)";
    navbar.style.boxShadow = "0px 4px 16px -6px rgba(189,189,189,0.78)";
  } else {
    navbar.style.backgroundColor = "rgba(255,255,255, 0)";
    navbar.style.boxShadow = "0px 4px 16px -200px rgba(189,189,189,0.78";
  }

  scrollSpy(scrollPosition);

});