let bars = document.querySelector('#bars');
let navbar = document.querySelector('.navbar');

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

bars.onclick = () => {
    bars.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    bars.classList.remove('fa-times');
    navbar.classList.remove('active');

    section.forEach((sec) => {
        let top = window.scrollY;
        let height = sec.offsetHeight;
        let offset = sec.offsetTop - 150;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height)
        {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header .navbar a[href*= '+ id +']').classList.add('active');
            })
        }
    })
}

document.querySelector('#search-icon').onclick = () => {
    document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () => {
    document.querySelector('#search-form').classList.remove('active');
}

//swiper
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
});

//swiper review
var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    slidesPerView: 3,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        640: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
});

