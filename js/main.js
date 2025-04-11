const URLMain = "https://fakestoreapi.com/products/"
const main = document.getElementsByTagName("main").item(0);
const cards = document.getElementById("cards");


function getData() {
    const options = {"method": "GET"}
    fetch(URLMain)
        .then((response) => {
            console.log(response);
            response.json().then((res) => {
                // console.log(res.length);
                // console.log(res[0].title);
                createcards(res);
            });
        })
        .catch((err) => {
            main.insertAdjacentHTML("beforeend",
                `<div class="alert alert-danger" role="alert">
                            ${err.message}
                        </div>`
            );
        });
}//getData()

getData();


function createcards(products) {
    let card = "";
    products.forEach(product => {
        card += `<div class="card" style="width: 18rem">
                    <img src="${product.image}" class="card-img-top" alt="${product.title}">
                    <div class="card-body">
                        <h5 class="card-title"><strong>${product.title}</strong></h5> <br/>
                        <h6 class="card-subtitle mb-2 text-muted"><strong>${product.category}</strong></h6> <br/>
                        <p class="card-text">${product.description.substring(0, 150)}...</p>
                        <p class="card-text">${product.rating.rate}</p>
                    
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#card${product.id}">
                            Ver más
                        </button>

                        <div class="modal fade" id="card${product.id}" tabindex="-1" aria-labelledby="cardLabel${product.id}" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="cardLabel${product.id}">${product.title}</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    ${product.description} <br /><br />
                                    <strong>Price: $${product.price}</strong>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    
                </div>`
    })

    cards.insertAdjacentHTML("beforeend", card)
}