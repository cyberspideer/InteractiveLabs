const themeBtn = document.querySelector ("#theme-toggle");
const modeLight = document.querySelector ("#mode-light");
const modeDark = document.querySelector ("#mode-dark");
const body = document.body;

if(localStorage.getItem("currentTheme") === "dark")
{

body.classList.add ("dark-mode");
modeDark.style.display = "none";
modeLight.style.display = "inline";
}
else
{
    modeDark.style.display = "none";
    modeLight.style.display = "inline";
}

// let currentTheme = 'dark'
// const body = document.body;

themeBtn.addEventListener("click",()=>{
    console.log("Button is being clicked")
    body.classList.toggle ("dark-mode");

    // if(currentTheme === "dark")

    if(body.classList.contains("dark-mode"))
    {
        // Show light icon
        modeDark.style.display = "none";
        modeLight.style.display = "inline";
        localStorage.setItem("currentTheme","dark");
        // currentTheme = "light"
    }
    else
    {
        modeLight.style.display = "none";
        modeDark.style.display = "inline";
        // show dark icon switch BG colors
        localStorage.setItem("currentTheme" ,"light");
        // currentTheme = "light"
    }
})
const languageSelect = document.querySelector("#language-select");
const elementToTranslate =  {
    "title": document.querySelector("h1"),
    "nav-home": document.querySelector("#nav-home"),
    "nav-products": document.querySelector("#nav-products"),
    "nav-about": document.querySelector("#nav-about"),
    "hero-title": document.querySelector(".hero h2"),
    "shop-now": document.querySelector(".hero a"),
    "footer-text": document.querySelector("footer p"),
    
};

let currentLanguage = localStorage.getItem("selectedLanguage") || "en"
    languageSelect.value = currentLanguage;

    async function applyLanguage(lang) {
        try {
            const response = await fetch("lang.json");
            const data = await response.json();
            const translations = data[lang];
    
            elementToTranslate["title"].textContent = translations["title"];
            elementToTranslate["nav-home"].textContent = translations["home"];
            elementToTranslate["nav-products"].textContent = translations["products"];
            elementToTranslate["nav-about"].textContent = translations["about"];
            elementToTranslate["hero-title"].textContent = translations["welcomeMessage"];
            elementToTranslate["hero-text"].textContent = translations["shopNow"];
            elementToTranslate["shop-now"].textContent = translations["shopNow"];
            elementToTranslate["footer-text"].textContent = translations["footerText"];
        } catch (error) {
            console.error("Error loading language file:", error);
        }
    }
     
    applyLanguage(currentLanguage);
    languageSelect.addEventListener("change", (event) => {
    const newLanguage = event.target.value;
        localStorage.setItem("selectedLanguage", newLanguage);
        applyLanguage(newLanguage);
    });