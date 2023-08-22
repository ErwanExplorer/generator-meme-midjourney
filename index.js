const imageArray = [
    "img/image (1).png",
    "img/image (2).png",
    "img/image (3).png",
    "img/image (4).png",
    "img/image (5).png",
    "img/image (6).png",
    "img/image (7).png",
    "img/image (8).png",
    "img/image (9).png",
    "img/image (10).png",
    "img/image (11).png",
    "img/image (12).png",
    "img/image (13).png",
    "img/image (14).png",
];
const image = document.querySelector("img");
const button = document.querySelector("button");
window.onload = () => generateRandomPicture(imageArray);
button.addEventListener("click", () => generateRandomPicture(imageArray));

function generateRandomPicture(array) {
    let randomNum = Math.floor(Math.random() * array.length);
    image.setAttribute("src", array[randomNum]);
}
