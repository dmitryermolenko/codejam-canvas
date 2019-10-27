var canvas = document.getElementById('rollingscopes');
ctx = canvas.getContext('2d');

var img = new Image();

img.src = 'data/image.png';

img.onload = function () {
  ctx.drawImage(img, 0, 0, 512, 512);
};


