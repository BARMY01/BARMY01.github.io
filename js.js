//Сдлайдер

let Galery_img = document.querySelector('.gallery'),
    Galery_btn_1 = document.querySelector('.gallery_link_1'),
    Galery_btn_2 = document.querySelector('.gallery_link_2'),
    Galery_btn_3 = document.querySelector('.gallery_link_3'),
    Galery_btn_4 = document.querySelector('.gallery_link_4');

Galery_btn_1.addEventListener('click', ()=>{
    Galery_img.style.background = " url(img/g1.png)"
});

Galery_btn_2.addEventListener('click', ()=>{
    Galery_img.style.background = " url(img/g2.png)"
});

Galery_btn_3.addEventListener('click', ()=>{
    Galery_img.style.background = " url(img/g3.png)"
});

Galery_btn_4.addEventListener('click', ()=>{
    Galery_img.style.background = " url(img/galery.png) center center no-repeat"
});

//Анимация Header

let Header__titel =  document.querySelector(".header__titel");
let Header__img = document.querySelector(".header__animation");

function Header__animation(){
    if(Header__titel.style.background =="none"){
        Header__titel.style.background = "url(img/hover_menu.png)"
        Header__img.style.transform = "skewY(20deg)"
    }else{
        Header__titel.style.background = "none"
        Header__img.style.transform = "none"
    }
}

setInterval('Header__animation()', 2500);

//Бургер меню

let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})