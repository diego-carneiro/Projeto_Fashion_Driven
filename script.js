const getURL = "https://mock-api.driven.com.br/api/v4/shirts-api/shirts";
const postURL = "https://mock-api.driven.com.br/api/v4/shirts-api/shirts";

function userName () {

    const name = prompt("Entre com o seu nome")
    console.log(name)
}
userName();

function selectModel(option) {

    const iconGroup = option.parentNode.parentNode;

    if (iconGroup.querySelector(".selected")) {
        const preSelected = iconGroup.querySelector(".selected")
        preSelected.classList.remove("selected")
    }

    option.classList.add("selected")
}
function selectCollar(option) {

    const iconGroup = option.parentNode.parentNode;

    if (iconGroup.querySelector(".selected")) {
        const preSelected = iconGroup.querySelector(".selected")
        preSelected.classList.remove("selected")
    }

    option.classList.add("selected")
}
function selectCloth(option) {

    const iconGroup = option.parentNode.parentNode;

    if (iconGroup.querySelector(".selected")) {
        const preSelected = iconGroup.querySelector(".selected")
        preSelected.classList.remove("selected")
    }

    option.classList.add("selected")
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
                <p><strong>Criador:&nbsp</strong>${item.owner}</p>
            </div>
        `
    });

}