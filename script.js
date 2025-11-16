document.addEventListener("DOMContentLoaded", function () {
    // Smooth fade-in animation
    document.body.style.opacity = "0";
    setTimeout(() => {
        document.body.style.transition = "opacity 1s ease-in-out";
        document.body.style.opacity = "1";
    }, 200);

    // Dark Mode Toggle
    const darkModeToggle = document.getElementById("darkModeToggle");

    // Check if dark mode was previously enabled
    if (localStorage.getItem("dark-mode") === "enabled") {
        document.body.classList.add("dark-mode");
        darkModeToggle.innerText = "☀️ Light Mode";
    }

    darkModeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("dark-mode", "enabled");
            darkModeToggle.innerText = "☀️ Light Mode";
        } else {
            localStorage.setItem("dark-mode", "disabled");
            darkModeToggle.innerText = "🌙 Dark Mode";
        }
    });

    // Button interactivity
    document.querySelectorAll("button").forEach(button => {
        button.addEventListener("click", function () {
            let action = this.innerText;
            alert(`Feature coming soon: ${action}!`);
        });
    });
});
