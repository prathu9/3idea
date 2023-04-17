(function(){
    const searchBox = document.querySelector(".site-icon-wrapper.search");
    const searchInput = document.querySelector(".site-icon-wrapper.search input");

    window.addEventListener("click", (e) => {
        if(searchBox.contains(e.target)){
            searchBox.classList.add("open");
            console.log(e.target)
        }
        else{
            searchBox.classList.remove("open");
        }
    })
    // searchBox.addEventListener("focus", (e) => {
        
    // })

    // searchBox.addEventListener("blur", (e) => {
    //     console.log(e.target)
    //     if(!searchBox.contains(e.target)){
            
    //     }
    // })

})()