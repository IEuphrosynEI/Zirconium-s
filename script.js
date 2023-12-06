const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const body = document.body;

yesBtn.addEventListener("click", () => {
    question.innerHTML = "AAAAAAAAAAAAAAa I Love You More";
    gif.src = "https://raw.githubusercontent.com/DzarelDeveloper/Img/main/gif.webp";

    hideButtons();

    body.style.background = "url('https://media.tenor.com/LcVcrw6Yf3UAAAAC/heart-animation.gif') center/cover";
});

noBtn.addEventListener("click", () => {
    question.innerHTML = "HINDI PWEDE YON";
    gif.src = "https://media.tenor.com/oU6JXIPVI7sAAAAi/angry-kitty.gif";

    hideButtons();

    // Change the background image when "No" is clicked
    body.style.background = "url('https://i.gifer.com/origin/bf/bf1f0d9f1a319195c6603043cb1ccf61.gif') center/cover";
});

noBtn.addEventListener("mouseover", () => {
    noBtn.innerHTML = "Ano Di Mo Na Ako Love?";
});

noBtn.addEventListener("mouseout", () => {
    // Reset the button text after mouseout
    noBtn.innerHTML = "Hindi na";
});

function hideButtons() {
    // Set the display property to 'none' for both buttons
    yesBtn.style.display = 'none';
    noBtn.style.display = 'none';
}