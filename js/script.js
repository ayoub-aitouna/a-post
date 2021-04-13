var image = document.querySelectorAll('.profile_image');
var image_ = document.querySelectorAll('.image');
var image_post = document.querySelectorAll('.img');
var menu_ = document.querySelectorAll('.menu');
var clicked = false;
setprofile_img();
menu();


function setprofile_img() {

    image.forEach(element => {
        element.innerHTML = '';
        element.innerHTML = '<img class="img_05" src="assest/s.jpg" alt="photo">';
    });
    image_post.forEach(element => {
        element.src = 'assest/s.jpg'
        element.setAttribute('onclick', 'image_click(this)');
    });
    image_.forEach(element => {
        element.src = 'assest/s.jpg'
        element.setAttribute('onclick', 'image_click(this)');
    });

}

function image_click(e) {
    //alert("element" + e.src);
    window.open(e.src, "_blank", "resizable=yes, scrollbars=yes, titlebar=yes, width=800, height=900, top=10, left=10");

}

function menu() {
    menu_.forEach(element => {
        console.log(element)
        element.setAttribute('onclick', 'menu_click(this)');
    });
}

function menu_click(e) {
    //console.log(e);
    let menu_layer = e.querySelectorAll('.menu_layer');
    console.log('menu layer elemts\n' + '\n \n' + menu_layer[0])
    if (!clicked) {
        menu_layer[0].classList.add('active');
        clicked = true;
    } else {
        menu_layer[0].classList.remove('active');
        clicked = false;
    }

}