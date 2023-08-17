var navlinks = document.getElementById('navLinks');

document.getElementById('close').addEventListener('click',function(e) {
    navlinks.style.right="-250px";
    navlinks.classList.toggle("show")

})
document.getElementById('lines').addEventListener('click',function(e) {
    navlinks.style.right="0px";
    navlinks.classList.toggle("show")
})