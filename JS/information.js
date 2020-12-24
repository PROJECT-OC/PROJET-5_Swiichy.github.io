(function () {
    let url = new URL(document.location);
    let parametre = url.searchParams;
    let id = parametre.get('id');
    //console.log(url)

    let manager = new TeddiesManager(undefined, 'http://localhost:3000/api/teddies');
    manager.fetchOneTeddyById(id).then(function (teddy) {
        //console.log(teddy);

        let wrapper = document.querySelector('#teddy-wrapper');
        teddy.draw(wrapper);
    });
})();
