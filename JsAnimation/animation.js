
/*-----------------------------------------------------------------*/
/*let getPopover = document.querySelector('.content-popover-item').
    addEventListener('click', function(){
        const a = document.querySelector('.content-sub-popover').style.visibility = "visible";
    });
*/

let clicked = false;
function toggle() {
    if(!clicked) {
        clicked = true,
        document.querySelector('.content-popover-item');
        document.querySelector('.content-sub-popover-active').style.visibility = "visible";
    } else {
        clicked = false;
        document.querySelector('.content-sub-popover-active').style.visibility = "hidden";
    }
}




