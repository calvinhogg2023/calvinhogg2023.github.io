history.scrollRestoration = 'auto';

var navbar = document.getElementById("navbarContainer");
var button = document.getElementById("navbar-menuButton");
var menu = document.getElementById("menu");



function toggleMenu() {
	if (menu.style.height === "240px") {
		//Collapsed
		button.style.opacity = "50%";
		menu.style.height = "0px";
		menu.style.boxShadow = "var(--shadow-none)";
	} else {
		//Expanded
		button.style.opacity = "100%";
		menu.style.height = "240px";
		menu.style.boxShadow = "var(--shadow-medium)";
	}
}

function hideMenu() {
	//Collapsed
	button.style.opacity = "50%";
	menu.style.height = "0px";
	menu.style.boxShadow = "var(--shadow-none)";
}

function menuButtonHover() {
	button.classList.add("hovered");
}

function menuButtonNotHover() {
	button.classList.remove("hovered");
}
