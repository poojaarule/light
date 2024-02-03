
function changeTheme(event) {
    let bgContainerE1 = document.getElementById("bgContainer");
let themeUserInputE1 = document.getElementById("themeUserInput");
let headingE1 = document.getElementById("heading");

let lightThemImgUrl =
    "url('https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-light-bg.png')";
let darkThemeImgUrl =
    "url('https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-dark-bg.png')";

    let themeUserInputVal = themeUserInputE1.value;

    if (themeUserInputVal === "Light") {
        bgContainerE1.style.backgroundImage = lightThemImgUrl;
        headingE1.style.color = "#014d40";
    } else if (themeUserInputVal === "Dark") {
        bgContainerE1.style.backgroundImage = darkThemeImgUrl;
        headingE1.style.color = "#ffffff";
    }
}
themeUserInputE1.addEventListener("keydown", changeTheme);