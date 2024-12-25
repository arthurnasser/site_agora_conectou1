document.addEventListener("DOMContentLoaded", function () {
    // Carregar o header
    var headerContainer = document.getElementById("header");
    var headerRequest = new XMLHttpRequest();
    headerRequest.onload = function () {
        headerContainer.innerHTML = this.responseText;
    };
    headerRequest.open("GET", "header.html");
    headerRequest.send();

    // Carregar o footer
    var footerContainer = document.getElementById("footer");
    var footerRequest = new XMLHttpRequest();
    footerRequest.onload = function () {
        footerContainer.innerHTML = this.responseText;
    };
    footerRequest.open("GET", "footer.html");
    footerRequest.send();
});
