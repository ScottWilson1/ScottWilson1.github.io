function openNav() {
    if(screen.width < 760) {
        document.getElementById("side-nav").style.width = "240px";
    }
}

function closeNav() {
    if(screen.width < 760) {
        document.getElementById("side-nav").style.width = "0px";
    }
}