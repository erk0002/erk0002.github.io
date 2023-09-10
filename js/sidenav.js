var open = false;
var sidenavButton = document.getElementById("sidenav-button");

function toggleNav() {
    if (open) { // if open, close
        open = false;
        document.getElementById("mySidenav").style.left = "-250px";
        sidenavButton.innerHTML = "&#9776; Useful Links";
    } else { // if closed, open
        open = true;
        document.getElementById("mySidenav").style.left = "0px";
        sidenavButton.innerHTML = "&#x2715 Useful Links";
    }
}