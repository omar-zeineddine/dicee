const dice1 = Math.floor(Math.random() * 6) + 1;
const dice1Img = "dice" + dice1 + ".png";
const dice1ImgSrc = "assets/images/" + dice1Img;
const img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", dice1ImgSrc);

const dice2 = Math.floor(Math.random() * 6) + 1;
const dice2Img = "dice" + dice2 + ".png";
const dice2ImgSrc = "assets/images/" + dice2Img;
const img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", dice2ImgSrc);
