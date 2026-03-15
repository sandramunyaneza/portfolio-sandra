const image = document.querySelector("#menu");
const affichs = document.querySelector("#menu-btn");
affichs.addEventListener("click",()=>{
    image.classList.toggle("active");
    document.body.classList.toggle("navbar-hidden"); /* pour que la section prennent 100% de la largeur*/
    if(image.classList.contains("active")){
        affichs.textContent = "✖";
    }else{
        affichs.textContent = "☰";
    }
})

if(typeof AOS !== "undefined" ){
   AOS.init({
    duration :1000,
    once : true
   })
}

 if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }
  
  window.scrollTo(0, 0);
    
//compteur
const compte = document.querySelectorAll(".num1 h2");

let started = false;

function compteur(counter) {

    const originalText = counter.innerText;
    const target = parseInt(originalText);
    const suffix = originalText.replace(/[0-9]/g, "");

    let count = 0;

    const interval = setInterval(() => {

        count += Math.ceil(target / 50);

        if (count >= target) {
            counter.innerText = target + suffix;
            clearInterval(interval);
        } else {
            counter.innerText = count + suffix;
        }

    }, 20);
}

const section = document.querySelector(".number");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

            compte.forEach(counter => compteur(counter));

            observer.unobserve(section); // lancer une seule fois
        }
    });
}, { threshold: 0.5 });

observer.observe(section);

//skill-bar

const skillSections = document.querySelectorAll(".skills-part1");

const observation = new IntersectionObserver((entries) => {

  entries.forEach((entry, index) => {

    if (entry.isIntersecting) {

      const bars = entry.target.querySelectorAll(".skills-pregress");

      bars.forEach(bar => {
        bar.style.width = bar.dataset.width;
      });

    }

  });

}, {
  threshold: 0.5
});

// Observer chaque skills-part1
skillSections.forEach(section => {
  observation.observe(section);
});

// compteur skill

const compteurs = document.querySelector(".huit");

let count = 0;
const target = 8; // valeur finale

const compter = () => {
    count++;
    compteurs.innerHTML = count;

    if (count < target) {
        setTimeout(compter, 100); // vitesse (plus grand = plus lent)
    }
};
const observers = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            compter();
            observers.unobserve(entry.target);
        }
    });
});

observers.observe(compteurs);

//portfolio image

const links = document.querySelectorAll(".navbar-port a");

links.forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        // retirer active de tous
        links.forEach(l => l.classList.remove("active"));

        // ajouter active au lien cliqué
        this.classList.add("active");
    });
});

//portfolio navbar

const lien = document.querySelectorAll(".navbar-port a");
const line = document.querySelector(".nav-line");
const items = document.querySelectorAll(".images1");

/* ===== Déplacer la ligne ===== */
function moveLine(element) {
    line.style.width = element.offsetWidth + "px";
    line.style.left = element.offsetLeft + "px";
}

/* ===== Filtrer les images ===== */
function filterPortfolio(filter) {

    items.forEach(item => {

        if (filter === "all" || item.dataset.category === filter) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }

    });

}

/* ===== Click menu ===== */
links.forEach(link => {

    link.addEventListener("click", function(e) {
        e.preventDefault();

        links.forEach(l => l.classList.remove("active"));
        this.classList.add("active");

        moveLine(this);

        const filter = this.dataset.filter;
        filterPortfolio(filter);
    });

});

/* ===== Position initiale au chargement ===== */
window.addEventListener("DOMContentLoaded", () => {

    const activeLink = document.querySelector(".navbar-port a.active");

    if (activeLink) {
        moveLine(activeLink);

        const filter = activeLink.dataset.filter;
        filterPortfolio(filter);
    }

});

//caroussel

const swiper = new Swiper('.swiper', {
  loop: true,
  speed: 600,
  spaceBetween: 30,

  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});