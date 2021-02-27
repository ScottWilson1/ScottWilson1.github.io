function openNav() {
    if(window.innerWidth < 840) {
        document.getElementById("side-nav").style.width = "200px";
    }
}

function closeNav() {
    if(window.innerWidth < 840) {
        document.getElementById("side-nav").style.width = "0px";
    }
}