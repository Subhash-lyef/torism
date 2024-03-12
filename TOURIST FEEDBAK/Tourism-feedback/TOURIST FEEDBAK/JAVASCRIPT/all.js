let toggleclick = false;
let toggleButton = document.querySelector(".navbar-toggler");
let toggle = document.querySelector(".nav-item");
let cont = document.querySelector(".aaaaa");
 toggleButton.addEventListener("click", () =>{
   
  if(toggleclick == false)
  {
    cont.classList.remove("container")
    toggle.classList.add("toggle-click");
    toggle.classList.remove("collapse");
    toggle.classList.remove("navbar-collapse");
    toggle.classList.remove("main-menu-count");

   
    toggleclick= true;
  }
  else{
     toggle.classList.remove("toggle-click");
     cont.classList.add("container");
     toggle.classList.add("collapse");
     toggle.classList.add("navbar-collapse");
    toggle.classList.add("main-menu-count");
     toggleclick = false;
  }

 });