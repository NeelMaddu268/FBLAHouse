var container = document.getElementById("container");
var threshold = 100; 
var scrollTop = window.pageYOffset * 0.85;

window.onscroll = function() {
  scrollTop = window.pageYOffset * 0.85;

  container.style.transform = "rotate(30deg) translateX(calc(50vw - " + scrollTop + "px))";
};

document.addEventListener("DOMContentLoaded", function () {
  const mailSvg = document.getElementById("envelope");
  const phoneSvg = document.getElementById("phone");
  const facebookSvg = document.getElementById("facebook");
  const instagram = document.getElementById("instagram")

  mailSvg.addEventListener("click", function () {
    window.location.href = "mailto:hiroteabaratl@gmail.com";
  });

  phoneSvg.addEventListener("click", function () {
    debugger;
    window.location.href = "tel:4045636031";
  });

  facebookSvg.addEventListener("click", function () {
    window.open("https://www.facebook.com/HiroTeaATL/", "_blank");
  });
  instagram.addEventListener("click", function () {
    window.open("https://www.instagram.com/hiroteaatl/", "_blank");
  });
});

function scrollFunction() {
if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
  document.getElementById("navBar").style.padding = "2.5px 10px";
  document.getElementById("logo").style.fontSize = "50px";
} else {
  document.getElementById("navBar").style.padding = "10px 10px";
  document.getElementById("logo").style.fontSize = "100px";
}
}