const colors = ["red", "green", "blue", "purple", "orange", "brown", "teal", "pink"];

function changeTextColor() {
    const textElement = document.getElementById("text");
    const randomIndex = Math.floor(Math.random() * colors.length);
    textElement.style.color = colors[randomIndex];
}
