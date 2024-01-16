const x = document.querySelector('#X');
const ham = document.querySelector('#Hamburger');
let open = false;
ham.addEventListener("click", opencol);
x.addEventListener("click", opencol);
function opencol(){
  ham.classList.toggle("hidden")
  x.classList.toggle("hidden");
  open= !(open);
  if (open){
    document.getElementById("navLinks").style.width = "80vw";
    document.body.style.overflow="hidden";
    document.getElementById("content").classList.toggle("blurred");
  }else{
    document.getElementById("navLinks").style.width = "0vw";
    document.body.style.overflow="visible";
    document.getElementById("content").classList.toggle("blurred");
  }
}
window.addEventListener("resize", function() {
    if (window.innerWidth > 1000) {
        document.getElementById("navLinks").style.width = "";
    }else{
      document.getElementById("navLinks").style.top = "calc(3rem + 16px)";
      document.getElementById("navBar").style.padding = "";


    }
});
