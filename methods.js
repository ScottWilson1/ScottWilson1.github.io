function openNav() {
    if(window.innerWidth < 760) {
        document.getElementById("side-nav").style.width = "240px";
    }
}

function closeNav() {
    if(window.innerWidth < 760) {
        document.getElementById("side-nav").style.width = "0px";
    }
}