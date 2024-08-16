const content_1 = document.querySelector('.content-1');
const content_2 = document.querySelector('.content-2');
const content_3 = document.querySelector('.content-3');
const content_4 = document.querySelector('.content-4');
const content_5 = document.querySelector('.content-5');
const showImgSec = document.querySelector('.hide-img-sec');

content_1.addEventListener('mouseover', () => {
    showImgSec.style.backgroundImage =    "url(./assets/hide-img-1.png)";
},1000);
content_2.addEventListener('mouseover', () => {
    showImgSec.style.backgroundImage =    "url(./assets/hide-img-2.png)";
},1000);
content_3.addEventListener('mouseover', () => {
    showImgSec.style.backgroundImage =    "url(./assets/hide-img-3.png)";
},1000);
content_4.addEventListener('mouseover', () => {
    showImgSec.style.backgroundImage =    "url(./assets/hide-img-4.png)";
},1000);
content_5.addEventListener('mouseover', () => {
    showImgSec.style.backgroundImage =    "url(./assets/hide-img-5.png)";
},1000);
