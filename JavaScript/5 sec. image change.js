function displayNextImage() {
    x = (x === images.length - 1) ? 0 : x + 1;
    document.getElementById("flex1").src = images[x];
}
function startTimer() {
    setInterval(displayNextImage, 5000);
}

var images = [], x = -1;
images[0] = "images/a.jpg";
images[1] = "images/b.jpg";
images[2] = "images/c.jpg";
images[3] = "images/d.jpg";