(function(){
    const servicesOptions = document.querySelectorAll(".service-options .option");
    servicesOptions.forEach((option) => {
        option.addEventListener("click", (e) => {
            const visibleService = document.querySelector(".visible-service");
            if(visibleService){
                visibleService.classList.remove('visible-service');
                document.querySelector('.option.active').classList.remove('active');
            }
            option.classList.add('active');
            document.querySelector(`.${e.currentTarget.dataset.serviceName}`).classList.add("visible-service");
        })
    })
})()