let hover = document.querySelectorAll(".wrap");
let deskripsi = document.querySelectorAll(".wrap");

for (let i = 0; i < hover.length; i++) {
    hover[i].addEventListener('mouseover', () => {
        hover[i].style.padding = "10px 0 10px 0";
        hover[i].style.margin = "-5px 0px 15px 0px";
    })

    hover[i].addEventListener('mouseleave', () => {
        hover[i].style.padding = "5px 0 5px 0";
        hover[i].style.margin = "0px 0 20px 0";
    })
    }

const portfolio = document.getElementById('portfolio');
const instagram = document.getElementById('instagram');
const github = document.getElementById('github');
const x = document.getElementById('x');
const tiktok = document.getElementById('tiktok');

github.addEventListener('click', () => {
    window.location.href = "sunset.html";
})

instagram.addEventListener('click', () => {
    window.location.href = "https://www.instagram.com/dnzainn/";
})

portfolio.addEventListener('click', () => {
    window.location.href = "portofolio.html"
})

x.addEventListener('click', () => {
    window.location.href = "https://x.com/zainajaa_"
})

tiktok.addEventListener('click', () => {
    window.location.href = "https://www.tiktok.com/@zainajaa_"
})