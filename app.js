
const questionBtn = document.querySelectorAll(".question-btn")
questionBtn.forEach(function(btn){
    btn.addEventListener("click", function(){
        let showBtn = btn.parentElement.parentElement
        showBtn.classList.toggle("show-text")
    })
})

