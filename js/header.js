// For showing and hiding side nav
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

})();

// for navigating sub menu
(function(){
    const sideMenuContainer = document.querySelector('.side-menu-container');
    const sideMenuOptions = document.querySelectorAll('.side-menu-option');
    const sideMenuBackBtn =  document.querySelector('.side-menu-back-btn');
    let translateValue = 0;
    sideMenuOptions.forEach((sideMenuOption) => {
        sideMenuOption.querySelector(':scope > span').addEventListener('click', () => {
            translateValue+=100;
            sideMenuContainer.style.transform = `translateX(-${translateValue}%)`;
            sideMenuOption.querySelector(':scope > .sub-side-menu').style.display = "block";
        })
    })

    sideMenuBackBtn.addEventListener('click', () => {
        translateValue-=100;
        console.log(translateValue)
        sideMenuContainer.style.transform = `translateX(-${translateValue}%)`;
    })
})();