const content_1 = document.querySelector('.content-1');
const content_2 = document.querySelector('.content-2');
const content_3 = document.querySelector('.content-3');
const content_4 = document.querySelector('.content-4');
const content_5 = document.querySelector('.content-5');
const showImgSec = document.querySelector('.hide-img-sec');
const hide_icon_img = document.querySelector('.hide-icon-img');

content_1.addEventListener('mouseover', () => {
    showImgSec.style.backgroundImage =    "url(./assets/hide-img1.png)";
    // hide_icon_img.style.backgroundColor =" #f3d0bb"
    // hide_icon_img.style.borderRadius =" 50%"
});
content_2.addEventListener('mouseover', () => {
    showImgSec.style.backgroundImage =    "url(./assets/hide-img2.png)";
    // hide_icon_img.style.backgroundColor =" #f3d0bb"
    // hide_icon_img.style.borderRadius =" 50%"
},1000);


content_3.addEventListener('mouseover', () => {
    showImgSec.style.backgroundImage =    "url(./assets/hide-img3.png)";
    // hide_icon_img.style.backgroundColor =" #f3d0bb"
    // hide_icon_img.style.borderRadius =" 50%"
},1000);


content_4.addEventListener('mouseover', () => {
    showImgSec.style.backgroundImage =    "url(./assets/hide-img4.png)";
    // hide_icon_img.style.backgroundColor =" #f3d0bb"
    // hide_icon_img.style.borderRadius =" 50%"
},1000);


content_5.addEventListener('mouseover', () => {
    showImgSec.style.backgroundImage =    "url(./assets/hide-img5.png)";
    // hide_icon_img.style.backgroundColor =" #f3d0bb"
    // hide_icon_img.style.borderRadius =" 50%"
},1000);
