"use strict";
"use strict";

/// MOBILE MENU
const burger = document.querySelector(".header__toggle");
const menu = document.querySelector(".header__navigation");
const menuLinks = document.querySelectorAll(".main-menu__link");
const body = document.querySelector('.page-body');
const headerOverlay = document.querySelector('.header__overlay')
let isMenuOpen = false;

burger.addEventListener("click", () => {
    body.classList.toggle("lock");
    menu.classList.toggle("active");
    burger.classList.toggle("active");
    headerOverlay.classList.toggle("active");
});

menuLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: "smooth",
            });
        }
        menu.classList.remove("active");
        burger.classList.remove("active");
        body.classList.remove("lock");
        headerOverlay.classList.remove("active");
    });
});


// СЛАЙДЕР КОТТЕДЖ
var main = new Splide('#cottages-slider', {
    heightRatio: 0.5,
    pagination: false,
    arrows: true,
    cover: true,
    gap: 10,
    autoplay: true,
    interval: 2000,
});

var thumbnails = new Splide('#thumbnail-slider', {
    perPage: 3,
    rewind: true,
    fixedWidth: 180,
    fixedHeight: 120,
    isNavigation: true,
    gap: 10,
    pagination: false,
    cover: true,
    arrows: false,
    dragMinThreshold: {
        mouse: 4,
        touch: 10,
    },
});
main.sync(thumbnails);
main.mount();
thumbnails.mount();

// СЛАЙДЕР КАФЕ-БАР
var cafe = new Splide('#cafe-slider', {
    heightRatio: 0.5,
    pagination: false,
    arrows: true,
    cover: true,
    gap: 10,
    autoplay: true,
    interval: 2000,
});

var thumbnails = new Splide('#thumbnail-cafe', {
    perPage: 3,
    rewind: true,
    fixedWidth: 180,
    fixedHeight: 120,
    isNavigation: true,
    gap: 10,
    pagination: false,
    cover: true,
    arrows: false,
    dragMinThreshold: {
        mouse: 4,
        touch: 10,
    },
});
cafe.sync(thumbnails);
cafe.mount();
thumbnails.mount();

// САУНА КАФЕ-БАР
var sauna = new Splide('#sauna-slider', {
    heightRatio: 0.5,
    pagination: false,
    arrows: true,
    cover: true,
    gap: 10,
    autoplay: true,
    interval: 2000,
});
var thumbnails = new Splide('#thumbnail-sauna', {
    perPage: 3,
    rewind: true,
    fixedWidth: 180,
    fixedHeight: 120,
    isNavigation: true,
    gap: 10,
    pagination: false,
    cover: true,
    arrows: false,
    dragMinThreshold: {
        mouse: 4,
        touch: 10,
    },
});
sauna.sync(thumbnails);
sauna.mount();
thumbnails.mount();

function showTab(index) {
    const tabs = document.querySelectorAll('.services__tab-item');
    tabs.forEach((tab, idx) => {
        if (idx !== index) {
            tab.classList.add("services__tab-item--hide");
        } else {
            // Показываем таб
            tab.classList.remove("services__tab-item--hide");

            // Получаем слайдер который лежит в нажатом табе
            const sliderElement = tab.querySelector('.services__slider');
            if (sliderElement && !sliderElement.dataset.swiper) {

                // Инициализируем слайдер добавив класс swiper
                sliderElement.classList.add('swiper');
                const sliderList = sliderElement.querySelector('.services__slider-list');
                if (sliderList) {
                    // Добавляем класс swiper-wrapper для корректной работы слайдера
                    sliderList.classList.add('swiper-wrapper');
                }

                const slideImgs = sliderElement.querySelectorAll('.services__slide-img');
                slideImgs.forEach((img) => {
                    img.classList.add('swiper-slide');
                });
                // Настройка самого слайдера
                const slider = new Swiper(sliderElement, {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    loop: true,
                    pagination: {
                        el: sliderElement.querySelector('.services__slider-pagination'),
                        clickable: true,
                    },
                });
                sliderElement.dataset.swiper = slider;
            }
        }
    });
}


const servicesTabs = document.querySelectorAll('.services__tab');
servicesTabs.forEach(function (tab, index) {
    tab.addEventListener('click', function () {
        servicesTabs.forEach(function (item) {
            item.classList.remove('services__tab--active');
        });
        tab.classList.add('services__tab--active');

        var tabIndex = Array.from(servicesTabs).indexOf(tab);
        console.log(tabIndex)
        showTab(tabIndex)
    });
});

// Слайдер главного экарана
var mainSlider = new Swiper('.slider-gallery__slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    slidesPerGroup: 1,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        700: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
    }
});
mainSlider.autoplay.start();
// Слайдер экскурсий
var tripsSlider = new Swiper('.trips__slider', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: '.trips__pagination',
        clickable: true,
    },
    breakpoints: {
        620: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        860: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    }
});

var tab1Slier = new Swiper('.services__slider', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    pagination: {
        el: '.services__slider-pagination',
        clickable: true,
    },
});

