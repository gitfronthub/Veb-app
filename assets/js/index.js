const slider = document.getElementById("temp-slider");
const sliderLabel = document.querySelector(".slider-label");
const tempValue = document.getElementById("temp-value");

slider.addEventListener("input", () => {
    const temp = Math.round(slider.value * 0.5);
    sliderLabel.textContent = temp + "°";
    tempValue.textContent = temp + "°";

    slider.style.background = `linear-gradient(to right, #2ee59d ${slider.value}%, #f5f5f5 ${slider.value}%)`;
});