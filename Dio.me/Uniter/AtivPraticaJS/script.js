let botao = document.querySelector("#botao");
let quebrado

botao.style.background="blue";

botao.addEventListener("mouseover", e =>{
    if(quebrado==="false")
        botao.style.background="green";
})

botao.addEventListener("mouseout", e =>{
    if(quebrado==="false")
        botao.style.background="blue";
})

botao.addEventListener("click", e =>{
    botao.style.background="red";
    botao.innerHTML="Quebrei"
    quebrado = true
})