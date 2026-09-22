function updateSize() {
    const sizeInfo = document.getElementById("sizeInfo");

    sizeInfo.querySelector("h1").textContent =
        `Width: ${window.innerWidth} and Height: ${window.innerHeight}`;
}

window.addEventListener("resize", updateSize);

updateSize();
