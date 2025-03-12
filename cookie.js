(() => {
  document.getElementById("accept-cookies").onclick = function () {
    document.getElementById("cookie-banner").style.display = "none";
    localStorage.setItem("cookiesAccepted", "true");
  };
  document.getElementById("reject-cookies").onclick = function () {
    document.getElementById("cookie-banner").style.display = "none";
    localStorage.setItem("cookiesAccepted", "false");
  };
})();
