(function(){
    const searchBox = document.querySelector(".site-icon-wrapper.search");

    window.addEventListener("click", (e) => {
        if(searchBox.contains(e.target)){
            searchBox.classList.add("open");
            console.log(e.target)
        }
        else{
            searchBox.classList.remove("open");
        }
    })
  
    const sideNavOverlay = document.querySelector(".side-nav-overlay");
    const sideMenuBtn = document.querySelector("header nav .hamburger-menu");
    const closeBtn = document.querySelector(".close-side-nav");

    sideMenuBtn.addEventListener("click", () => {
        sideNavOverlay.classList.add("open");
        document.body.style.overflow = "hidden";
    });

    const closeSideNav = () => {
        sideNavOverlay.classList.remove("open");
        document.body.style.overflow = "initial";
    }

    sideNavOverlay.addEventListener("click", closeSideNav)

    closeBtn.addEventListener("click", closeSideNav)


})()