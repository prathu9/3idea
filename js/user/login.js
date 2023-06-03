(function(){
    const formOptions = document.querySelectorAll('.form-options');
    formOptions.forEach(option => {
        option.addEventListener('click',(e) => {
            const visibleOption = document.querySelector('.visible-option');
            if(visibleOption){
                visibleOption.classList.remove('visible-option');
                document.querySelector('.form-options.active').classList.remove('active');
            }
            option.classList.add("active");
            document.querySelector(`.${e.currentTarget.dataset.formOption}`).classList.add('visible-option');
        })
    })
})()