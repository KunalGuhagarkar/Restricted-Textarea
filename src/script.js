const textArea = document.getElementById("text-container");
const counter = document.getElementById("count");

textArea.addEventListener("input", (e) => {
    counter.textContent = `${charCount(e.target.value)} / 250`;
});

function charCount(str) {
    let char = str.split("").length;
    while (char <= 250) {
        char === 250
            ? (textArea.classList.add("active-border", "active-color"),
              counter.classList.add("active-color"))
            : (textArea.classList.remove("active-border", "active-color"),
              counter.classList.remove("active-color"));

        return char;
    }
}
