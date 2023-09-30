history.scrollRestoration = 'auto';

var navbar = document.getElementById("navbarContainer");
var button = document.getElementById("menuButton");
var icon = document.getElementById("menuButton-image");
var menu = document.getElementById("menu");
var menuOpen = 0;
var desktopWidth = window.matchMedia("(min-width: 890px)")

const widthOutput = document.querySelector("#width");
window.onresize = reportWindowSize;

function showMenu() {
	icon.style.opacity = "100%";
	menu.style.height = "305px";
	menu.style.boxShadow = "var(--shadow-medium)";
	menuOpen = 1;
}

function hideMenu() {
	icon.style.opacity = null;
	menu.style.height = null;
	menu.style.boxShadow = "var(--shadow-none)";
	menuOpen = 0;
}

function toggleMenu() {
	if (menuOpen == 0) {
		showMenu();
	} else {
		hideMenu();
	}
}

function reportWindowSize() {
	if (desktopWidth.matches) {
		hideMenu();
	}
}

document.getElementById('profile').src="assets/images/index/profile.gif?a="+Math.random()
