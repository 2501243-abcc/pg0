"use strict";
{
  const hamburger = document.querySelector('.hamburger');
  const blackBg = document.querySelector('.black-bg');
  const nav = document.querySelector('.nav'); //navクラスの要素を取得

  hamburger.addEventListener('click', function() {
    blackBg.classList.toggle('open')
  });

  hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('open');
    nav.classList.toggle('open'); //openクラスを付け外しする
  });
}

// scripts.js
document.addEventListener('DOMContentLoaded', function () {
    var scrollTopButton = document.getElementById('scrollTopButton');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            scrollTopButton.style.display = 'block';
        } else {
            scrollTopButton.style.display = 'none';
        }
    });

    scrollTopButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});