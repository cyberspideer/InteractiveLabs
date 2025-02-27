const themeBtn = document.querySelector ("#theme-toggle");
const modeLight = document.querySelector ("#mode-light");
const modeDark = document.querySelector ("#mode-dark");

let currentTheme = 'dark'
const body = document.body;

themeBtn.addEventListener("click",()=>{
    console.log("Button is being clicked")
    body.classList.toggle ("dark-mode");

    if(currentTheme === "dark")
    {
        // Show light icon
        modeDark.style.display = "none";
        modeLight.style.display = "inline";
        localStorage.setItem("currentTheme","light");
        currentTheme = "light"
    }
    else
    {
        modeLight.style.display = "none";
        modeDark.style.display = "inline";
        // show dark icon switch BG colors
        localStorage.setItem("currentTheme" ,"dark");
        // currentTheme = "light"
    }
})
