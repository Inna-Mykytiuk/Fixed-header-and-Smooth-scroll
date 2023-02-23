const device = navigator.userAgent.toLowerCase();
const mob = /webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/.test(
  device
);

if (mob) {
  // const bgCover = document.querySelector('.bg-cover');
  // bgCover.classList.remove('bg-fixed');

  const hiddenHeroSecond = document.querySelector('.hero2');
  const hiddenHeroThird = document.querySelector('.hero3');
  hiddenHeroSecond.style.display = 'none';
  hiddenHeroThird.style.display = 'none';
}
