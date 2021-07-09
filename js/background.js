const images = ["1.jpg","3.jpg","4.jpg","5.jpg","6.jpg","10.jpg","11.png"];
const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `../img/${chosenImage}`;

const bgDiv = document.getElementById("background-img");
bgDiv.appendChild(bgImage);

