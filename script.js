const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes") || "";
}

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

showNotes();

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "img/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
    updateStorage();
});

notesContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    }
});

notesContainer.addEventListener("input", function(e) {
    if (e.target.className === "input-box") {
        updateStorage();
    }
});

document.addEventListener("keydown", event => {
    if (event.key === "Enter" && event.target.className === "input-box") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
});