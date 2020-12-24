class Teddy {
    constructor(id, name, price, description, imageUrl, colors) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.imageUrl = imageUrl;
        this.colors = colors;
    }


    drawInList(wrapper) {
        let html = `<div class="content-product">
                        <a class="a-productbyid" href="information.html?id=${this.id}">
                            <img class="img-product" src="${this.imageUrl}">
                            <button class="active-hover__btn">
                                test
                            </button>
                            <div class="botside-product">
                                <h3 class="name-product">${this.name}</h3>
                                <p class="price-product">${new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(this.price / 100)}</p>
                            </div>
                        </a>
                    </div>`;
        wrapper.insertAdjacentHTML('beforeend', html);
        const getBtnCard = document.querySelector(".active-hover__btn");
    }

    draw(wrapper) {
        //console.log(this.name);
        let options = '';
        for (let color of this.colors) {
            options += `<option value="${color.toLowerCase()}">${color}</option>`;
        }

        let html = `<div class="content-product">
                        <div class="content-img">
                            <img class="img-product" src="${this.imageUrl}">
                        </div>
                        <div class="botside-product">
                            <h3 class="name-product">${this.name}</h3>
                            <p class="price-product">${new Intl.NumberFormat('fr-FR', {
            style: 'currency', currency: 'EUR'
        }).format(this.price / 100)}</p>
                            <p class="description-product">${this.description}</p>
                            <div class="content-select_button">
                                <div class="content-select>
                                    <label for="pet-select">Couleur aux choix:</label>
                                <select name="colors" id="color-select">
                                    ${options}
                                </select>
                            </div>
                            <div class="content-button">
                                <button id="ajouter-panier" type="button" class="btn btn-outline-secondary">
                                <i class="fas fa-cart-plus"></i>
                                <span class="color-text_button">
                                Ajouter au panier</span>
                                </button>
			                </div>
                        </div>
                    </div>`;
        wrapper.insertAdjacentHTML('beforeend', html);
    }
}