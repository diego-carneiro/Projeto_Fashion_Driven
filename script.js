const getURL = "https://mock-api.driven.com.br/api/v4/shirts-api/shirts";
const postURL = "https://mock-api.driven.com.br/api/v4/shirts-api/shirts";
let count = 0;
let modelName = " ";
let modelHTML = " ";
let neckName = " ";
let neckHTML = " ";
let materialName = " ";
let materialHTML = " ";
let imageLink = " ";
let ownerName = " ";
let authorName = " ";
let finishedOrder = " ";


function userName() {

    authorName = prompt("Entre com o seu nome")
}
userName();

function selectModel(option) {

    const iconGroup = option.parentNode.parentNode;
    const getName = option.parentNode;
    const listChildren = getName.children;
    modelHTML = (listChildren[1].innerHTML)

    if(modelHTML === "T-shirt"){
        modelName = "t-shirt";
    } else if ( modelHTML === "Camiseta"){
        modelName = "long";
    } else if (modelHTML === "Manga longa"){
        modelName = "top-tank";
    }

    if (iconGroup.querySelector(".selected")) {
        const preSelected = iconGroup.querySelector(".selected")
        preSelected.classList.remove("selected")

    } else {
        count++;
    }

    option.classList.add("selected")
    finishOrder()

}
function selectNeck(option) {

    const iconGroup = option.parentNode.parentNode;
    const getName = option.parentNode;
    const listChildren = getName.children;
    neckHTML = (listChildren[1].innerHTML)

    if(neckHTML === "Gola V"){
        neckName = "v-neck";
    } else if (neckHTML === "Gola Redonda"){
        neckName = "round";
    } else if (neckHTML === "Gola polo"){
        neckName = "polo";
    }

    if (iconGroup.querySelector(".selected")) {
        const preSelected = iconGroup.querySelector(".selected")
        preSelected.classList.remove("selected")
    } else {
        count++;
    }

    option.classList.add("selected")

    finishOrder()
}
function selectMaterial(option) {

    const iconGroup = option.parentNode.parentNode;
    const getName = option.parentNode;
    const listChildren = getName.children;
    materialHTML = (listChildren[1].innerHTML)

    if(materialHTML === "Seda"){
        materialName = "silk";
    } else if (materialHTML === "Algodão"){
        materialName = "cotton";
    } else if (materialHTML === "Poliéster"){
        materialName = "polyester";
    }

    if (iconGroup.querySelector(".selected")) {
        const preSelected = iconGroup.querySelector(".selected")
        preSelected.classList.remove("selected")
    } else {
        count++;
    }

    option.classList.add("selected")
    finishOrder()
}

function finishOrder() {

    const button = document.querySelector(".confirmOrder")

    if (count === 3) {
        button.classList.add("buttonEnabled")
    }

    imageLink = document.getElementById("imgLink").value;

}
finishOrder();

function submitOrder() {

    finishOrder();

    const finishedOrder = {
        model: `${modelName}`,
        neck: `${neckName}`,
        material: `${materialName}`,
        image: `${imageLink}`,
        owner: `${authorName}`,
        author: `${authorName}`
    }
    console.log(finishedOrder)

    alert(`Sua encomenta é uma roupa com as seguintes características: -${modelHTML} -${neckHTML} -${materialHTML}`);

    const promise = axios.post(postURL, finishedOrder);
    promise.then();
    promise.catch((error) => alert(error + "Ops, não conseguimos processar sua encomenda"));
    
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
