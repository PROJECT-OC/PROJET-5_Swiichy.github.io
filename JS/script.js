//--JS--//
//--Remplacer toutes les alertes par des fenêtres pop-up
//--Changement du nom des différentes class pour le CSS
//--Insertion du button removeAllItem dans le dom a partir du JS pour l'implementer dans le tableau 

//--CSS--//
//--Refonte du design complet du site ecommerce
//--Utilisation de SASS pour le projet 
//--Simplifier au maximum de design 

//--HTML--//
//--Ajout des différentes balise META manquante

//Lien avec l'API 
getAllTeddies = () => {
    return new Promise((resolve) => {
        let request = new XMLHttpRequest();
        request.onreadystatechange = function () {
            if (
                this.readyState == XMLHttpRequest.DONE &&
                this.status >= 200 &&
                this.status < 400
            ) {
                resolve(JSON.parse(this.responseText));
                //console.log("Connecté");
            } else {
                //console.log("Echec de la connection");
            }
        };
        request.open("GET", "http://localhost:3000/api/teddies/" + idNounours);
        request.send();
    });
};

async function teddies() {
    const teddies = await getAllTeddies();

    //Lien avec la page index HTML
    let listeProduit = document.getElementById("listeProduit");

    //Création de la structure index HTML 
    teddies.forEach((teddy) => {
        let produitContenant = document.createElement("section");
        let produitIllustration = document.createElement("div");
        let produitElement = document.createElement("div");
        let produitPhoto = document.createElement("img");
        let produitNom = document.createElement("h3");
        let produitPrix = document.createElement("p");
        let produitAction = document.createElement("a");

        //Ajout des attributs au balise index HTML 
        produitContenant.setAttribute("class", "produit_contenant");
        produitIllustration.setAttribute("class", "produit_illustration");
        produitPhoto.setAttribute("src", teddy.imageUrl);
        produitPhoto.setAttribute("alt", "Photo de l'ours en peluche");
        produitElement.setAttribute("class", "produit_element");
        produitNom.setAttribute("class", "produit_nom");
        produitPrix.setAttribute("class", "produit_prix");
        produitAction.setAttribute("href", "produit.html?id=" + teddy._id);

        //Agencement des éléments index HTML 
        listeProduit.appendChild(produitContenant);
        produitContenant.appendChild(produitIllustration);
        produitIllustration.appendChild(produitPhoto);
        produitContenant.appendChild(produitElement);
        produitElement.appendChild(produitNom);
        produitElement.appendChild(produitPrix);
        produitElement.appendChild(produitAction);

        //Contenu des balises index HTML 
        produitNom.textContent = teddy.name;
        produitPrix.textContent = teddy.price / 100 + " euros";
        produitAction.textContent = "En savoir plus";
    });
}

let idNounours = "";
async function detailTeddies() {
    idNounours = location.search.substring(4);
    //console.log(idNounours);
    const detailTeddies = await getAllTeddies();

    //Lien avec la page produit HTML 
    let detailProduit = document.getElementById("detailProduit");

    //Création de la structure produit HTML 
    let detailContenant = document.createElement("section");
    let detailIllustration = document.createElement("div");
    let detailEltPrix = document.createElement("div");
    let detailElement = document.createElement("div");
    let detailPhoto = document.createElement("img");
    let detailNom = document.createElement("h3");
    let detailDescription = document.createElement("p");
    let detailInformationPrix = document.createElement("div");
    let detailPrix = document.createElement("p");
    let detailOption = document.getElementById("detailOption");
    let detailAction = document.getElementById("ajout_panier");

    //Ajout des attributs au balise produit HTML 
    detailContenant.setAttribute("class", "detail_contenant");
    detailIllustration.setAttribute("class", "detail_illustration");
    detailEltPrix.setAttribute("class", "detail_eltprix");
    detailPhoto.setAttribute("src", detailTeddies.imageUrl);
    detailPhoto.setAttribute("alt", "Photo de " + detailTeddies.name);
    detailElement.setAttribute("class", "detail_element");
    detailNom.setAttribute("class", "detail_nom");
    detailDescription.setAttribute("class", "detail_description");
    detailInformationPrix.setAttribute("class", "detail_information_prix");
    detailPrix.setAttribute("class", "detail_prix");

    //Agencement des éléments produit HTML 
    detailProduit.appendChild(detailContenant);
    detailContenant.appendChild(detailIllustration);
    detailContenant.appendChild(detailEltPrix);
    detailIllustration.appendChild(detailPhoto);
    detailContenant.appendChild(detailElement);
    detailElement.appendChild(detailNom);
    detailElement.appendChild(detailDescription);
    detailContenant.appendChild(detailInformationPrix);
    detailInformationPrix.appendChild(detailPrix);
    detailInformationPrix.appendChild(detailOption);
    detailInformationPrix.appendChild(detailAction);
    detailEltPrix.appendChild(detailElement);
    detailEltPrix.appendChild(detailInformationPrix);
    detailOption.appendChild(detailAction);


    //Contenu des balises produit HTML 
    detailNom.textContent = detailTeddies.name;
    detailDescription.textContent = detailTeddies.description;
    detailPrix.textContent = detailTeddies.price / 100 + " €";

    

    detailTeddies.colors.forEach((teddy) => {
        let choixOption = document.createElement("option");
        choixOption.setAttribute("value", teddy);
        document.getElementById("choix_option").appendChild(choixOption).innerHTML = teddy;
    });
}


//--Panier--//

//Panier de l'utilisateur 
let panier = JSON.parse(localStorage.getItem("panier"));

//Affichage du nombre d'article dans le panier
function nombreIndexPanier() {
    let indexPanier = document.getElementById("indexPanier");
    indexPanier.textContent = panier.length;
}

//Vérification et initialisation du panier 
if (localStorage.getItem("panier")) {
    //console.log(panier)
} else {
    console.log("Le panier va être initialisé");
    let panierInit = [];
    localStorage.setItem("panier", JSON.stringify(panierInit));
}

//Fenêtre popUp de confirmation ajout panier
function popUpAjoutPanier() {
    //Recupération du container
    let getContainer = document.querySelector(".container-desktop");

    //Création de la structure popUp HTML
    let createpopUpElement = document.createElement("div");
    let createDivPElement = document.createElement("div");
    let createDivButtonElement = document.createElement("div");
    let createPpopUpElement = document.createElement("p");
    let createButtonShopElement = document.createElement("button");
    let createButtonPanierElement = document.createElement("button");
    let createAShopElement = document.createElement("a");
    let createAPanierElement = document.createElement("a");

    //Ajout des attributs au balise popUp HTML
    createpopUpElement.setAttribute("class", "popup_element");
    createDivPElement.setAttribute("class", "popup_titleElement");
    createPpopUpElement.setAttribute("class", "title_element");
    createDivButtonElement.setAttribute("class", "content_button_element");
    createButtonShopElement.setAttribute("class", "content_button_shop_element");
    createButtonPanierElement.setAttribute("class", "content_button_panier_element");
    createAShopElement.setAttribute("href", "index.html");
    createAPanierElement.setAttribute("href", "panier.html");

    //Agencement des éléments popUp HTML
    getContainer.insertAdjacentElement('afterbegin', createpopUpElement);
    createpopUpElement.appendChild(createDivPElement);
    createDivPElement.insertAdjacentElement('afterbegin', createPpopUpElement);
    createDivPElement.insertAdjacentElement('afterend', createDivButtonElement);
    createDivButtonElement.appendChild(createAShopElement);
    createDivButtonElement.appendChild(createAPanierElement);
    createAShopElement.appendChild(createButtonShopElement);
    createAPanierElement.appendChild(createButtonPanierElement);


    //Ajout du contenu textuel des éléments popUp HTML
    createPpopUpElement.innerText = "Votre produit vous attend dans votre panier";
    createButtonShopElement.textContent = "Continuer vos achats";
    createButtonPanierElement.innerText = "Voir le panier";

    //Script permettant de ne plus afficher la div en question en cliquant sur celle ci
    $(".popup_element").click(function () {
        $(".popup_element").fadeOut(25);
    });
    $(".container-desktop").click(function (evt) {
        evt.stopPropagation();
    });
}

//Ajout de l'article au panier de l'utilisateur
ajoutPanier = () => {
    let acheter = document.getElementById("ajout_panier");
    acheter.addEventListener("click", async function () {
        const ajout = await getAllTeddies();
        panier.push(ajout);
        localStorage.setItem("panier", JSON.stringify(panier));
        //console.log("Le produit a été ajouté au panier");
        //alert("Cet article a été ajouté dans votre panier")
        popUpAjoutPanier();
        //location.reload();
    });
};

//--Page Panier--//
panierCreation = () => {
    if (panier.length > 0) {
        document.getElementById("panierVide").remove();

        //Création de la structure du tableau récapitulatif 
        let recap = document.createElement("table");
        let ligneTableau = document.createElement("tr");
        let recapPhoto = document.createElement("th");
        let recapNom = document.createElement("th");
        let recapPrixUnitaire = document.createElement("th");
        let recapRemove = document.createElement("th");
        let ligneTotal = document.createElement("tr");
        let colonneTotal = document.createElement("th");
        let recapPrixPaye = document.createElement("td");

        //Placement de la structure dans la page
        let recapPanier = document.getElementById("panier-recap");
        recapPanier.appendChild(recap);
        recap.appendChild(ligneTableau);
        ligneTableau.appendChild(recapPhoto);
        ligneTableau.appendChild(recapNom);
        ligneTableau.appendChild(recapPrixUnitaire);
        ligneTableau.appendChild(recapRemove);

        //Contenu des entetes
        recapPhoto.textContent = "Article";
        recapNom.textContent = "Nom";
        recapPrixUnitaire.textContent = "Prix";
        recapRemove.textContent = "Annuler ?";

        //Boucle FOR pour affichage des articles dans le panier

        for (let i = 0; i < panier.length; i++) {

            //Création des lignes du tableau
            let ligneArticle = document.createElement("tr");
            let photoArticleTd = document.createElement("td");
            let photoArticle = document.createElement("img");
            let nomArticle = document.createElement("td");
            let prixUnitArticle = document.createElement("td");
            let supprimerArticle = document.createElement("td");
            let removeArticle = document.createElement("i");

            //Attribution des class et ID
            ligneArticle.setAttribute("id", "article" + [i]);
            photoArticle.setAttribute("class", "photo_article");
            photoArticle.setAttribute("src", panier[i].imageUrl);
            photoArticle.setAttribute("alt", "Photo de l'article commandé");
            removeArticle.setAttribute("class", "fas fa-times-circle fa-1x");
            removeArticle.setAttribute("title", "Supprimer article ?");

            //console.log(i);

            //Supprimer un produit du panier 
            removeArticle.addEventListener("click", (event) => { this.annulerArticle(i); })

            //Agencement de la structure HTML
            recap.appendChild(ligneArticle);
            ligneArticle.appendChild(photoArticleTd);
            photoArticleTd.appendChild(photoArticle);
            ligneArticle.appendChild(nomArticle);
            ligneArticle.appendChild(prixUnitArticle);
            ligneArticle.appendChild(supprimerArticle);
            supprimerArticle.appendChild(removeArticle);

            //Contenu de chaque ligne
            nomArticle.textContent = panier[i].name;
            prixUnitArticle.textContent = panier[i].price / 100 + " €";
            //colorArticle.textContent = panier[i].colors[i];
            //console.log(panier[i].name);
        };

        //Dernière ligne du tableau : Total
        recap.appendChild(ligneTotal);
        ligneTotal.appendChild(colonneTotal);
        ligneTotal.setAttribute("id", "ligneSomme");
        colonneTotal.textContent = "Total à payer";
        ligneTotal.appendChild(recapPrixPaye);


        recapPrixPaye.setAttribute("id", "sommeTotal");
        recapPrixPaye.setAttribute("colspan", "4");
        colonneTotal.setAttribute("id", "colonneTotal");
        colonneTotal.setAttribute("colspan", "2");

        //Calcule de l'addition total
        let sommeTotal = 0;
        panier.forEach((panier) => {
            sommeTotal += panier.price / 100;
        });

        //Affichage du prix total à payer dans l'addition
        //console.log(sommeTotal);
        document.getElementById("sommeTotal").textContent = sommeTotal + " €";

        //Supprimer tous les articles du panier
        document.getElementById("removeAllItem").addEventListener("click", annulerArticles = () => {
            //Clear le contenu du panier
            localStorage.clear();
            //Mise à jour de la page pour afficher de la suppression au client
            window.location.reload();
        });
    }
};

//PopUpCart
panierCreationPopUp = () => {
    if (panier.length > 0) {

        //Création de la structure du tableau récapitulatif
        let popUpRecap = document.createElement("table");
        let popUpLigneTotal = document.createElement("tr");
        let popUpColonneTotal = document.createElement("th");
        let popUpRecapPrixPaye = document.createElement("td");


        //Placement de la structure dans la page
        let popUpPanier = document.getElementById("panier-popup");
        popUpPanier.appendChild(popUpRecap);


        for (let i = 0; i < panier.length; i++) {

            //Création des lignes du tableau
            let popUpLigneArticle = document.createElement("tr");
            let popUpPhotoArticleTd = document.createElement("td");
            let popUpPhotoArticle = document.createElement("img");
            let popUpPrixUnitArticle = document.createElement("td");
            let popUpSupprimerArticle = document.createElement("td");
            let popUpRemoveArticle = document.createElement("i");

            //Attribution des class et ID
            popUpLigneArticle.setAttribute("id", "popUpArticle" + [i]);
            popUpPhotoArticle.setAttribute("class", "popup_photo_article");
            popUpPhotoArticle.setAttribute("src", panier[i].imageUrl);
            popUpPhotoArticle.setAttribute("alt", "Photo de l'article commandé");
            popUpRemoveArticle.setAttribute("class", "fas fa-times-circle fa-1x");
            popUpRemoveArticle.setAttribute("title", "Supprimer article ?");

            //Supprimer un produit du panier 
            popUpRemoveArticle.addEventListener("click", (event) => { this.annulerArticle(i); })

            //Agencement de la structure HTML
            popUpRecap.appendChild(popUpLigneArticle);
            popUpLigneArticle.appendChild(popUpPhotoArticleTd);
            popUpPhotoArticleTd.appendChild(popUpPhotoArticle);
            popUpLigneArticle.appendChild(popUpPrixUnitArticle);
            popUpLigneArticle.appendChild(popUpSupprimerArticle);
            popUpSupprimerArticle.appendChild(popUpRemoveArticle);

            //Contenu de chaque ligne
            popUpPrixUnitArticle.textContent = panier[i].price / 100 + " €";
        }

        //Dernière ligne du tableau : Total
        popUpRecap.appendChild(popUpLigneTotal);
        popUpLigneTotal.appendChild(popUpColonneTotal);
        popUpLigneTotal.setAttribute("id", "popUpLigneSomme");
        popUpColonneTotal.textContent = "Total à payer";
        popUpLigneTotal.appendChild(popUpRecapPrixPaye);

        popUpRecapPrixPaye.setAttribute("id", "popUpSommeTotal");
        popUpRecapPrixPaye.setAttribute("colspan", "4");
        popUpColonneTotal.setAttribute("id", "popUpColonneTotal");
        popUpColonneTotal.setAttribute("colspan", "2");

        //Calcule de l'addition total
        let popUpsommeTotal = 0;
        panier.forEach((panier) => {
            popUpsommeTotal += panier.price / 100;
        });

        //Affichage du prix total à payer dans l'addition
        //console.log(sommeTotal);
        document.getElementById("popUpSommeTotal").textContent = popUpsommeTotal + " €";
    }
};

annulerArticle = (i) => {
    panier.splice(i, 1);
    localStorage.clear();
    //Mise à jour du nouveau panier avec suppression de l'article
    localStorage.setItem("panier", JSON.stringify(panier));
    //Mise à jour de la page pour afficher de la suppression au client
    window.location.reload();
};

//--Formulaire--//

//Fonction qui permet de vérifier les inputs du form
checkInput = () => {
    let checkNumber = /[0-9]/;
    let checkEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let checkSpecialCharacter = /[§!@#$%^&*().?":{}|<>]/;
    let checkMessage = "";

    //Récupération des inputs
    let nom = document.getElementById("nom").value;
    let prenom = document.getElementById("prenom").value;
    let email = document.getElementById("email").value;
    let adresse = document.getElementById("adresse").value;
    let ville = document.getElementById("ville").value;

    //Condition de test des différents input
    //Nom
    if (checkNumber.test(nom) == true || checkSpecialCharacter.test(nom) == true || nom == "") {
        checkMessage = "Veuillez vérifier les informations concernant votre nom. Les caractères spéciaux ou les chiffres ne sont pas autorisés";
        document.getElementById("nomCheckMessage").innerHTML = "Veuillez vérifier les informations concernant votre nom. Les caractères spéciaux ou les chiffres ne sont pas autorisés";
    } else {
        //console.log("Ok");
    }
    //Prénom
    if (checkNumber.test(prenom) == true || checkSpecialCharacter.test(prenom) == true || prenom == "") {
        checkMessage = checkMessage + "\n" + "Veuillez vérifier les informations concernant votre prénom. Les caractères spéciaux ou les chiffres ne sont pas autorisés";
        document.getElementById("prenomCheckMessage").innerHTML = "Veuillez vérifier les informations concernant votre prénom. Les caractères spéciaux ou les chiffres ne sont pas autorisés";
    } else {
        //console.log("Ok");
    }
    //Mail
    if (checkEmail.test(email) == false || email == "") {
        checkMessage = checkMessage + "\n" + "Veuillez vérifier les informations concernant votre email. Les caractères spéciaux ne sont pas autorisés";
        document.getElementById("emailCheckMessage").innerHTML = "Veuillez vérifier les informations concernant votre email. Les caractères spéciaux ne sont pas autorisés";
    } else {
        //console.log("Ok");
    }
    //Adresse
    if (checkSpecialCharacter.test(adresse) == true || adresse == "") {
        checkMessage = checkMessage + "\n" + "Veuillez vérifier les informations concernant votre adresse postale. Les caractères spéciaux ne sont pas autorisés";
        document.getElementById("adresseCheckMessage").innerHTML = "Veuillez vérifier les informations concernant votre adresse postale. Les caractères spéciaux ne sont pas autorisés";
    } else {
        //console.log("Ok");
    }
    //Ville
    if (checkSpecialCharacter.test(ville) == true || checkNumber.test(ville) == true || ville == "") {
        checkMessage = checkMessage + "\n" + "Veuillez vérifier les informations concernant votre ville. Les caractères spéciaux ou les chiffres ne sont pas autorisés";
        document.getElementById("villeCheckMessage").innerHTML = "Veuillez vérifier les informations concernant votre ville. Les caractères spéciaux ou les chiffres ne sont pas autorisés";
    } else {
        //console.log("Ok");
    }
    //Si un des champs n'est pas respecté => message d'alert avec la raison
    if (checkMessage != "") {
        //alert("Attention certaines données ne sont pas conformes");
        document.getElementById("alertFormRegex").innerHTML = "Attention certaines données ne sont pas conformes";
    } else {
        //Si le formulaire est validé => construction de l'objet contact
        contact = {
            lastName: nom,
            firstName: prenom,
            address: adresse,
            city: ville,
            email: email,
        };
        return contact;
    }
};

//Vérification du panier
checkPanier = () => {
    //Vérifier qu'il y ai au moins un produit dans le panier
    let etatPanier = JSON.parse(localStorage.getItem("panier"));
    //Si le panier est vide ou null
    if (etatPanier < 1 || etatPanier == null) {
        alert("Votre panier est vidé");
        return false;
    } else {
        //console.log("Le panier n'est pas vidé");
        return true;
    }
};

//Envoi a l' API
//Tableau et objet demandé par l'API pour la commande
let contact;
let products = [];
let url = "http://localhost:3000/api/teddies/order";

const envoiFormulaire = (sendForm, url) => {
    return new Promise((resolve) => {
        let request = new XMLHttpRequest();
        request.onload = function () {
            if (this.readyState == XMLHttpRequest.DONE && this.status == 201) {
                sessionStorage.setItem("order", this.responseText);
                window.location = "./confirmation.html";
                resolve(JSON.parse(this.responseText));
                console.log(sendForm);
            } else {
                //
            }
        };
        request.open("POST", url);
        request.setRequestHeader("Content-Type", "application/json");
        request.send(sendForm);
        console.log(sendForm);
    });
};

//Confirmation de commande
confirmCommande = () => {
    let commander = document.getElementById("form_1");
    commander.addEventListener("submit", (event) => {
        event.preventDefault()
        //Si le panier n'est pas vide et que le form est valide => Construction du tableau products envoyé a l'API
        if (checkPanier() == true && checkInput() != null) {
            //console.log("L'envoi peut être fait");
            panier.forEach((article) => {
                products.push(article._id);
            });
            console.log("Ce tableau sera envoyé à l'API : " + products);

            //Création de l'objet a envoyer
            let commande = {
                contact,
                products,
            };

            let sendform = JSON.stringify(commande);
            envoiFormulaire(sendform, url);
            console.log(commande);

            //Une fois la commande effectué retour a l'état initial des tableaux/objet/localStorage
            contact = {};
            products = [];
            localStorage.clear();
        } else {
            console.log("ERROR");
        }
    });
};

//Récupération des informations pour affichage sur la page de confirmation
retourOrder = () => {
    if (sessionStorage.getItem("order") != null) {
        let order = JSON.parse(sessionStorage.getItem("order"));
        document.getElementById("firstName").innerHTML = order.contact.firstName;
        document.getElementById("orderId").innerHTML = order.orderId;
        console.log(order);
        sessionStorage.removeItem("order");
    }
    //Redirection vers l'accueil
    else {
        alert("Merci pour vote commande. A bientôt");
        window.location = "./index.html";
    }
};

//------Tableau de recap de la commande dans la page de confirmation------//

confirmRecap = () => {
    //Création de la structure du tableau récapitulatif
    let recapConfirm = document.createElement("table");
    let ligneConfirm = document.createElement("tr");
    let confirmPhoto = document.createElement("th");
    let confirmNom = document.createElement("th");
    let confirmPrixUnitaire = document.createElement("th");
    let ligneConfirmTotal = document.createElement("tr");
    let colonneConfirmTotal = document.createElement("th");
    let confirmPrixPaye = document.createElement("td");

    //Placement de la structure dans la page
    let confirmPanier = document.getElementById("confirmation-recap");
    confirmPanier.appendChild(recapConfirm);
    recapConfirm.appendChild(ligneConfirm);
    ligneConfirm.appendChild(confirmPhoto);
    ligneConfirm.appendChild(confirmNom);
    ligneConfirm.appendChild(confirmPrixUnitaire);

    //contenu des entetes
    confirmPhoto.textContent = "Article";
    confirmNom.textContent = "Nom";
    confirmPrixUnitaire.textContent = "Prix";

    //Incrémentation de l'id des lignes pour chaque produit
    let i = 0;
    let order = JSON.parse(sessionStorage.getItem("order"));

    order.products.forEach((orderArticle) => {
        //Création de la ligne
        let ligneConfirmArticle = document.createElement("tr");
        let photoConfirmArticle = document.createElement("img");
        let nomConfirmArticle = document.createElement("td");
        let prixUnitConfirmArticle = document.createElement("td");

        //Attribution des class pour le css
        ligneConfirmArticle.setAttribute("id", "article_acheté" + i);
        photoConfirmArticle.setAttribute("class", "photo_article_acheté");
        photoConfirmArticle.setAttribute("src", orderArticle.imageUrl);
        photoConfirmArticle.setAttribute("alt", "Photo de l'article acheté");

        //Insertion dans le HTML
        recapConfirm.appendChild(ligneConfirmArticle);
        ligneConfirmArticle.appendChild(photoConfirmArticle);
        ligneConfirmArticle.appendChild(nomConfirmArticle);
        ligneConfirmArticle.appendChild(prixUnitConfirmArticle);

        //Contenu des lignes

        nomConfirmArticle.textContent = orderArticle.name;
        prixUnitConfirmArticle.textContent = orderArticle.price / 100 + " €";
    });

    //Dernière ligne du tableau : Total
    recapConfirm.appendChild(ligneConfirmTotal);
    ligneConfirmTotal.appendChild(colonneConfirmTotal);
    ligneConfirmTotal.setAttribute("id", "ligneSomme");
    colonneConfirmTotal.textContent = "Total payé";
    ligneConfirmTotal.appendChild(confirmPrixPaye);

    confirmPrixPaye.setAttribute("id", "sommeConfirmTotal");
    confirmPrixPaye.setAttribute("colspan", "4");
    colonneConfirmTotal.setAttribute("id", "colonneConfirmTotal");
    colonneConfirmTotal.setAttribute("colspan", "2");

    //Calcule de l'addition total
    let sommeConfirmTotal = 0;
    order.products.forEach((orderArticle) => {
        sommeConfirmTotal += orderArticle.price / 100;
    });

    //Affichage du prix total à payer dans l'addition
    console.log(sommeConfirmTotal);
    document.getElementById("sommeConfirmTotal").textContent =
        sommeConfirmTotal + " €";
};


