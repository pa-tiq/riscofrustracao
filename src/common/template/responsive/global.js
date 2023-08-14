var widthSize = window.innerWidth;
var body = document.getElementsByTagName("body").item(0);

// Deixar o sidebar inicialmente collapse no tablet
if (widthSize > 767 && widthSize < 991) {
    body.classList.add("sidebar-collapse");

} else if (widthSize <= 767) {
}