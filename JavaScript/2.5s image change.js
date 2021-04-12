function displayNextImage() {
    x = (x === images.length - 1) ? 0 : x + 1;
    document.getElementById("map").src = images[x];
}
function startTimer() {
    setInterval(displayNextImage, 2500);
}

var images = [], x = -1;
images[0] = "images/a.jpg";
images[1] = "images/b.jpg";
images[2] = "images/c.jpg";
images[3] = "images/d.jpg";
images[4] = "images/e.jpg";