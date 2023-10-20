function openNav() {
    let sidebar = document.getElementById("mySidenav");
    sidebar.style.left = "0";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    var sidebar = document.getElementById("mySidenav");
    sidebar.style.left = "-255px"; // Hide the sidebar off-screen
    document.body.style.backgroundColor = "white";
}