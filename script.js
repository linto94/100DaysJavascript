const toggleDarkmode = document.querySelector(".toggle-darkmode");
const toggleText = document.querySelector(".toggle-text");

let darkMode = localStorage.getItem("darkMode");

// Set DarkMode 

const enableDarkMode = () => {
     document.body.classList.add("darkmode");
     toggleText.textContent = "Light";
     localStorage.setItem("darkMode", "enabled");
}

// Disable Dark Mode

const disableDarkMode = () => {
     document.body.classList.remove("darkmode");
     toggleText.textContent = "Dark";
     localStorage.setItem("darkMode", null);
}

// Save Dark Mode History

if (darkMode === "enabled") {
    enableDarkMode();
}

// Add Event Lsitener

toggleDarkmode.addEventListener("click", () => {
    let darkMode = localStorage.getItem("darkMode");

    if (darkMode !== "enabled") {
         enableDarkMode();
    } else {
    	disableDarkMode();
    }
});