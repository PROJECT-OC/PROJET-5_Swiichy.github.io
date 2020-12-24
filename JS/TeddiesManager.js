class TeddiesManager {
    constructor(wrapper, url) {
        this.wrapper = wrapper;
        this.url = url;
        this.teddies = [];
    }

    fetchAllTeddies() {
        return new Promise(function (resolve, reject) {

            fetch(this.url).then(function (res) {
                if (res.ok) {
                    res.json().then(function (data) {
                        this.teddies = [];
                        for (let teddy of data) {
                            this.teddies.push(
                                new Teddy(
                                    teddy._id,
                                    teddy.name,
                                    teddy.price,
                                    teddy.description,
                                    teddy.imageUrl,
                                    teddy.colors
                                )
                            );
                        }
                        resolve()
                    }.bind(this));
                } else {
                    reject('pas ok!');
                }
            }.bind(this));
        }.bind(this));
    }

    fetchOneTeddyById(id) {
        return new Promise(function (resolve, reject) {
            //'http://localhost:3000/api/teddies/ + id'
            fetch([this.url, id].join('/')).then(function (res) {
                if (res.ok) {
                    res.json().then(function (data) {
                        let teddy = new Teddy(
                            data._id,
                            data.name,
                            data.price,
                            data.description,
                            data.imageUrl,
                            data.colors
                        )
                        resolve(teddy)
                    }.bind(this));
                } else {
                    reject('pas ok!');
                }
            }.bind(this));
        }.bind(this));
    }

    drawAllTeddies() {
        for (let teddy of this.teddies) {
            console.log(teddy);
            teddy.drawInList(this.wrapper);
        }
    }
}
