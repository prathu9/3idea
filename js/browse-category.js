(function(){
    const browseCatCloseBtn = document.querySelector(".browse-category .close-btn");
    const browseCat = document.querySelector(".browse-category");
    const filterIcon = document.querySelector(".filter-icon");
    
    filterIcon.addEventListener("click", () => {
        browseCat.classList.remove("minimize");
        browseCat.classList.remove("slide-out");
        browseCat.classList.remove("hide");
        browseCat.classList.add("slide-in");
        document.body.style.overflow = "hidden";
    });

    browseCatCloseBtn.addEventListener("click", () => {
        browseCat.classList.add("slide-out");
        browseCat.classList.remove("slide-in");
        browseCat.classList.add("minimize");
        document.body.style.overflow = "initial";
    })

})()

console.log("loaded")