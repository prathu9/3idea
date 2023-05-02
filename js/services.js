(function(){
    const servicesOptions = document.querySelectorAll(".service-options .option");
    servicesOptions.forEach((option) => {
        option.addEventListener("click", (e) => {
            document.querySelector(".visible-service").classList.remove('visible-service')
            document.querySelector(`.${e.currentTarget.dataset.serviceName}`).classList.add("visible-service");
        })
    })
})()