const getURL = "https://mock-api.driven.com.br/api/v4/shirts-api/shirts";
const postURL = "https://mock-api.driven.com.br/api/v4/shirts-api/shirts";

function selecionar(opcao) {
    console.log(opcao)

    const vo = opcao.parentNode.parentNode;
    console.log(vo)

    console.log(vo.querySelector(".selected"))

    if (vo.querySelector(".selected")) {
        const preSelected = vo.querySelector(".selected")
        console.log(preSelected)
        preSelected.classList.remove("selected")
    }

    opcao.classList.add("selected")
}

function lastOrdersRequest() {

    const promise = axios.get(getURL);
    promise.then(response => {

        lastOrdersRendering(response.data)
    });

}
lastOrdersRequest();

function lastOrdersRendering(list) {

    const allItens = document.querySelector(".allItens");

    list.forEach(item => {

        allItens.innerHTML += `
            <div class="orderBox">
                <img src="${item.image}">
                <p>${item.owner}</p>
            </div>
        `
    });

}