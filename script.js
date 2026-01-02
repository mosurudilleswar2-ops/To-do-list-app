const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const darkToggle = document.getElementById("darkToggle");

// ADD TASK
addBtn.addEventListener("click", () => {
    if (taskInput.value === "") return;

    const li = document.createElement("li");
    li.innerHTML = `
        <input type="checkbox">
        <span>${taskInput.value}</span>
        <button>✖</button>
    `;

    // COMPLETE TASK
    li.querySelector("input").addEventListener("change", () => {
        li.querySelector("span").classList.toggle("completed");
    });

    // DELETE TASK
    li.querySelector("button").addEventListener("click", () => {
        li.remove();
    });

    taskList.appendChild(li);
    taskInput.value = "";
});

// DARK MODE
darkToggle.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
});
 