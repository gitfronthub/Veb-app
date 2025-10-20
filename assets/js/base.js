const range = document.getElementById("progressRange");
const value = document.getElementById("progressValue");

range.addEventListener("input", () => {
    const percent = range.value;
    value.textContent = percent + "%";
    range.style.background = `linear-gradient(to right, #2ee59d ${percent}%, #f5f5f5 ${percent}%)`;
});