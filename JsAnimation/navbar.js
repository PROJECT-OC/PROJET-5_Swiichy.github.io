//NAVBAR HAMBURGER ANIMATION

const hamburger = document.querySelector('.hamburger');
const backdrop = document.querySelector('.backdrop');
const sidebar = document.querySelector('.sidebar');

hamburger.addEventListener('click', () => {
    toggleSidebar();
});

backdrop.addEventListener('click', () => {
    toggleSidebar();
});

const toggleSidebar = () => {
    backdrop.classList.toggle('backdrop--active');
    sidebar.classList.toggle('sidebar--active');
}

const iconPanier = document.getElementById("popUpCart");
const popUpBackDrop = document.querySelector(".backdrop-popup");
const popUpSidebar = document.querySelector(".sidebarCart");

iconPanier.addEventListener('click', () => {
    popUpToggleSidebar();
});

popUpBackDrop.addEventListener('click', () => {
    popUpToggleSidebar();
});

const popUpToggleSidebar = () => {
    popUpBackDrop.classList.toggle('backdrop--active');
    popUpSidebar.classList.toggle('sidebar--active');
}
