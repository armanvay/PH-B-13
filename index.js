document.getElementById("login").addEventListener("click", function () {
  this.innerHTML = "Logout";
  this.style.backgroundColor = "green";
  this.style.color = "white";
});
// Buy Now button functionality
document.querySelectorAll(".buy-now").forEach(function (btn) {
  btn.addEventListener("click", function () {
    this.innerHTML = "Completed";
    this.style.backgroundColor = "darkgreen";
    this.style.color = "white";
  });
});

