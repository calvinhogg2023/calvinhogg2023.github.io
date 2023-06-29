history.scrollRestoration = 'auto';

function toggleMenu() {
	var x = document.getElementById("menu");
	var y = document.getElementById("navbar-menuButton");
	if (x.style.height === "300px") {
		x.style.height = "0px";
		x.style.boxShadow = "var(--shadow-none)";
		y.style.opacity = "50%";
	} else {
		x.style.height = "300px";
		x.style.boxShadow = "var(--shadow-small)";
		y.style.opacity = "100%";
	}
}

function hideMenu() {
	var x = document.getElementById("menu");
	var y = document.getElementById("navbar-menuButton");
	x.style.height = "0px";
	x.style.boxShadow = "var(--shadow-none)";
	y.style.opacity = "50%";
}

function menuButtonHover() {
	var y = document.getElementById("navbar-menuButton");
	y.classList.add("hovered");
}

function menuButtonNotHover() {
	var y = document.getElementById("navbar-menuButton");
	y.classList.remove("hovered");
}
