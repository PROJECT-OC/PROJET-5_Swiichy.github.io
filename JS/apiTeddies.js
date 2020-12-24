/*Fiche de route*/

// Création de la class TeddiesManager / qui prend en paramètre 3 variables : 
/* 
- wrapper : variable qui me sers a récupérer l'élément du DOM 
- url : qui pointe vers l'url de l'API
- this.teddies = [] : qui me permet de convertir les données json en format tableaux

function (TeddiesManager) --->
- fetchAllTeddies() : function qui me permet de faire un appel fetch qui récupère les data de tous les produits
- drawAllTeddies() : function qui me permet d'afficher les datas dans le DOM grâce a l'élément pris en paramètre (this.wrapper)
- fetchOneTeddyById(id) : 
*/




(function () {
    let wrapper = document.querySelector('#teddies-wrapper');
    let manager = new TeddiesManager(wrapper, 'http://localhost:3000/api/teddies');

    manager.fetchAllTeddies().then(function () {
        manager.drawAllTeddies();
        console.log(manager);
    })
})();