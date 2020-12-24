
let getIconOne = document.querySelector(".icon-focus_animation_one");
let getIconTwo = document.querySelector(".icon-focus_animation_two");
let getIconThree = document.querySelector(".icon-focus_animation_three");
let getTextOne = document.querySelector(".text-activeOne");
let getTextTwo = document.querySelector(".text-activeTwo");
let getTextThree = document.querySelector(".text-activeThree");


getIconOne.addEventListener("mouseenter", function (event) {
    getTextOne.style.display = "initial";

    setTimeout(function () {
        getTextOne.style.display = "none";
    }, 1500)
}, false);

getIconTwo.addEventListener("mouseenter", function (event) {
    getTextTwo.style.display = "initial";

    setTimeout(function () {
        getTextTwo.style.display = "none";
    }, 1500)
}, false);

getIconThree.addEventListener("mouseenter", function (event) {
    getTextThree.style.display = "initial";

    setTimeout(function () {
        getTextThree.style.display = "none";
    }, 1500)
}, false);




