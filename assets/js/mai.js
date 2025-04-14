// Theme toggle logic
const toggleTheme = () => {
const currentTheme = document.documentElement.getAttribute("data-theme");
const newTheme = currentTheme === "dark" ? "light" : "dark";
document.documentElement.setAttribute("data-theme", newTheme);
localStorage.setItem("theme", newTheme);
};

// Set saved theme on load
window.addEventListener("DOMContentLoaded", () => {
const saved = localStorage.getItem("theme") || "light";
document.documentElement.setAttribute("data-theme", saved);
});
