function selecionar (opcao) {
    console.log(opcao)

    const vo = opcao.parentNode.parentNode;
    console.log(vo)

    console.log(vo.querySelectorAll(".seleted"))

    if (vo.querySelector(".seleted")){
        const preSelected = vo.querySelector(".seleted")
        console.log(preSelected)
        preSelected.classList.remove("selected")
    }

    opcao.classList.add("selected")
}