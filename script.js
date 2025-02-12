const button = document.getElementById("btn");
const container = document.getElementById("hiddenblocks__id");
const rotatedImage = document.getElementById("rotatedImage");
let isFlipped = false;

button.addEventListener("click", () => {
    isFlipped = !isFlipped;
    if (container.style.display === "none") {
        container.style.display = "grid";
        button.querySelector("span").textContent = "Скрыть";
        
    } else {
        container.style.display = "none";
        button.querySelector("span").textContent = "Показать все";
    }
    
    rotatedImage.style.transform = isFlipped ? "rotate(180deg)" : "rotate(0deg)";
});
let swiper;

function initSwiper() {
  if (window.matchMedia("(max-width: 767px)").matches) {
    if (!swiper) {
      swiper = new Swiper(".swiper-container", {
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        watchSlidesProgress:true,
        centerSlides: false,
        freeMode: false,
        loop: false,
        breakpoints: {
          320: {
            slidesPerView: 'auto', 
            spaceBetween: 10,
          },
        },
      });
    }
  } else {
    if (swiper) {
      swiper.destroy(true, true);
      swiper = null;
    }
  }
}

initSwiper();
window.addEventListener("resize", initSwiper);

