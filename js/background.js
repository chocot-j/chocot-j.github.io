const images = ["city.jpg", "workspace.jpg", "coffee.jpg"];
const BgImage = document.createElement("img");
const prevBgImg = document.createElement("img");
BgImage.classList.add("fadeinEffect");
prevBgImg.classList.add("prevImg");

function savePrevImg() { // make futher behind image for natural fadein effect
    prevBgImg.src = `img/${prevImage}`;
    document.body.appendChild(prevBgImg);
}

function choseBgImg() { // change background image with fadein effect
    let chosenImage = images[Math.floor(Math.random() * images.length)];
    if (chosenImage === prevImage) {
        return choseBgImg();
    }
    savePrevImg();
    BgImage.src = `img/${chosenImage}`;
    document.body.appendChild(BgImage);
    prevImage = chosenImage; // change prevImage 'after' changed background image and push it next time
}

let prevImage = images[Math.floor(Math.random() * images.length)]; // set first image with no effect
prevBgImg.src = `img/${prevImage}`;
document.body.appendChild(prevBgImg);
setInterval(choseBgImg, 30000);

// change background image code