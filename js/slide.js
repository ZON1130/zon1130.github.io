const leftBtn2 = document.querySelector(".b-l");
const rightBtn2 = document.querySelector(".b-r");
const imageBox2 = document.querySelector(".box2");
const images2 = document.querySelectorAll(".box2 img");
const imageWidth2 = images2[0].offsetWidth;
let offset2 = 0;
let timer2;

// 停止定时器函数
function stopTimer() {
  clearInterval(timer2);
}

// 启动定时器函数
function startTimer() {
  timer2 = setInterval(() => {
    rightBtn2.click();
  }, 3000);
}

// 鼠标进入 .box2 时停止定时器
imageBox2.addEventListener("mouseenter", () => {
  stopTimer();
});

// 鼠标离开 .box2 时重新启动定时器
imageBox2.addEventListener("mouseleave", () => {
  startTimer();
});

leftBtn2.addEventListener("click", () => {
  if (offset2 < 0) {
    offset2 += 656;
    imageBox2.style.transform = `translateX(${offset2}px)`;
  } else {
    // 如果已经是第一张图片，则将偏移量重置为最后一张图片的偏移量
    offset2 = -5248;
    imageBox2.style.transform = `translateX(${offset2}px)`;
  }
});

rightBtn2.addEventListener("click", () => {
  offset2 -= 656;
  imageBox2.style.transform = `translateX(${offset2}px)`;

  // 判断是否到达最后一张图片，若是则重置偏移量为0
  if (offset2 <= -(images2.length - 3) * imageWidth2) {
    offset2 = 0;
    imageBox2.style.transform = `translateX(${offset2}px)`;
  }
});

startTimer();
