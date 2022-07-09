
// --- General

// Colors
function updateTheme(e) {
    theme=e.target.value;
    setThemeColors();
}
document.getElementById("theme").value = theme;

function updateAccentColor(e) {
    AccentColor = e.target.value;
    setAccentColorAlts();
}
document.getElementById("accentColor").value = AccentColor;

function updateEnableAcrylic(e) {
    enableAcrylic = e.target.value;
}
document.getElementById("enableAcrylic").value = enableAcrylic;


// --- Main Interface

// Title bar
function updateTitleBarHeight(e) {
    titleBarHeight = e.target.value-0;
}
document.getElementById("titleBarHeight1").value = Math.min(48,titleBarHeight);
document.getElementById("titleBarHeight2").value = Math.max(48,titleBarHeight);
function setNavButtonsLenght() {
    navButtonsLenght = showBack + showRefresh + showForward;
}
function updateShowBack(e) {
    showBack = e.target.value;
    setNavButtonsLenght();
}
document.getElementById("showBack").value = showBack;
function updateShowRefresh(e) {
    showRefresh = e.target.value;
    setNavButtonsLenght();
}
document.getElementById("showRefresh").value = showRefresh;
function updateShowForward(e) {
    showForward = e.target.value;
    setNavButtonsLenght();
}
document.getElementById("showForward").value = showForward;
function updateShowUsername(e) {
    showUsername = e.target.value;
    setNavButtonsLenght();
}
document.getElementById("showUsername").value = showUsername;



// Navigation tabs
function updateNavLocation(e) {
    navLocation = e.target.value;
    document.getElementById("navSubmenuLocation").visible=navLocation=="left";
    //document.getElementById("navStyle1").visible=navLocation=="left";
    document.getElementById("titleBarHeight1").visible=navLocation=="left";
    //document.getElementById("navStyle2").visible=navLocation=="top";
    document.getElementById("titleBarHeight2").visible=navLocation=="top";
    if (navLocation=="left") {
        titleBarHeight = Math.min(48,titleBarHeight);
        document.getElementById("titleBarHeight1").value = titleBarHeight;
        navStyle = 1;
        document.getElementById("navStyle1").value = 1;
    }else{
        titleBarHeight = Math.max(48,titleBarHeight);
        document.getElementById("titleBarHeight2").value = titleBarHeight;
        navStyle = 1;
        document.getElementById("navStyle2").value = 1;
    }
}
document.getElementById("navLocation").value = navLocation;
function updateNavSubmenuLocation(e) {
    navSubmenuLocation = e.target.value-0;
}
document.getElementById("navSubmenuLocation").value = navSubmenuLocation;
document.getElementById("navStyle1").value = navStyle;
document.getElementById("navStyle2").value = navStyle;



// Show icons
function updateShowIconDownload(e) {
    showIconDownload = e.target.value;
}
document.getElementById("showIconDownload").value = showIconDownload;
function updateShowIconBigPicture(e) {
    showIconBigPicture = e.target.value;
}
document.getElementById("showIconBigPicture").value = showIconBigPicture;
function updateShowIconVR(e) {
    showIconVR = e.target.value;
}
document.getElementById("showIconVR").value = showIconVR;
function updateShowIconInbox(e) {
    showIconInbox = e.target.value;
}
document.getElementById("showIconInbox").value = showIconInbox;
function updateShowIconAnnouncement(e) {
    showIconAnnouncement = e.target.value;
}
document.getElementById("showIconAnnouncement").value = showIconAnnouncement;
function updateShowIconParentalLock(e) {
    showIconParentalLock = e.target.value;
}
document.getElementById("showIconParentalLock").value = showIconParentalLock;
function updateShowIconAddGame(e) {
    showIconAddGame = e.target.value;
}
document.getElementById("showIconAddGame").value = showIconAddGame;
function updateShowIconFriends(e) {
    showIconFriends = e.target.value;
}
document.getElementById("showIconFriends").value = showIconFriends;



// Steam Menu
function updateSteamMenuPreset(e) {
    steamMenuPreset = e.target.value;
    setMenuPreset();
    document.getElementById("steamMenu").values = steamMenu;
}
document.getElementById("steamMenu").values = steamMenu;

// --- About
document.getElementById("skinVersion").innerText = `Skin version ${version}`;