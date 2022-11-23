const botaomodal = document.querySelector("[data-modal-control]")

    botaomodal.addEventListener("click",function(){
    let valormodal = botaomodal.getAttribute("data-modal-control")
    document.getElementById(valormodal).classList.toggle("show-modal")
    console.log(document.getElementById(valormodal))

    })

const botaoremover = document.querySelector(".modalclose")
botaoremover.addEventListener("click",function(){
    let valorbotao = botaoremover.getAttribute("data-modal-control")
    document.getElementById(valorbotao).classList.toggle("show-modal")
})