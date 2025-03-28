import Footer from "../components/footer/footer.js";
import Navbar from "../components/navbar/navbar.js";
import MenuNav from "../components/navbar/menu.js";
import Header from "../components/header/header.js";

const footer = document.querySelector(".footer");
if (footer) {
	footer.innerHTML = Footer();
}

const nav = document.querySelector(".nav");
if (nav) {
	nav.innerHTML = Navbar();
	MenuNav();
}

const headerRoot = document.querySelector(".header");
if (headerRoot) {
	const title = headerRoot.dataset.title;
	headerRoot.innerHTML = Header(title);
}
