const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const sent = document.querySelector(".sentence");

yesBtn.addEventListener("click", () => {
    question.innerHTML = "AAAAAAA, 月が綺麗ですね";
    sent.style.display = 'block';
    gif.src = "https://raw.githubusercontent.com/DzarelDeveloper/Img/main/gif.webp"
    yesBtn.style.display = 'none';
    noBtn.style.display = 'none';
});

noBtn.addEventListener("click", () => {
    question.innerHTML = "TT";
    gif.src = "https://static.wixstatic.com/media/672110_d3e6d7b4d5be44fe9ce9d54f609ae128.gif"
    yesBtn.style.display = 'none';
    noBtn.style.display = 'none';
});
