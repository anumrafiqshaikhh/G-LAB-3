let count = 0;

const btn = document.getElementById("actionBtn");
const status = document.getElementById("status");

btn.addEventListener("click", () => {
    count++;

    // Click animation
    btn.classList.add("click");
    setTimeout(() => btn.classList.remove("click"), 150);

    // Change button color each click
    btn.style.backgroundColor = count % 2 === 0 ? "#4CAF50" : "#2196F3";

    if (count >= 5) {
        btn.disabled = true;
        status.innerHTML = "⛔ Limit reached (5 clicks)";
        status.style.backgroundColor = "#ffeaea";
        status.style.borderColor = "red";
    } else {
        status.innerHTML = `✅ Clicked ${count} time${count > 1 ? "s" : ""}`;
        status.style.backgroundColor = "#eaffea";
        status.style.borderColor = "green";
    }
});