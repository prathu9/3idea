(function(){
    const hobbyOptions = document.querySelectorAll(".preference-opt");
    hobbyOptions.forEach((option) => {
        option.addEventListener("click", (e) => {
            const visibleService = document.querySelector(".visible-service");
            if(visibleService){
                visibleService.classList.remove('visible-service');
                document.querySelector('.preference-opt.active').classList.remove('active');
            }
            option.classList.add('active');
            document.querySelector(`.${e.currentTarget.dataset.preferenceName}`).classList.add("visible-service");
        })
    })
})()