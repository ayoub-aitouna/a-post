var container = document.querySelector('.container');

var Blog = '<div class="blogs">' +
    '<div class="blog">' +
    '<div class="head">' +
    '<div class="profile_image"></div>' +
    '<div class="name_date">' +
    '<a class="name">Mehdi Daoudi</a>' +
    ' <div class="date">January 17 at 1:07 PM</div>' +
    '</div>' +
    ' <div class="menu"><i class="fas fa-ellipsis-v"></i>' +
    '<div class="menu_layer">' +
    '<ul>' +
    '<li class="menu_li">delete</li>' +
    '<li class="menu_li">report</li>' +
    '<li class="menu_li">save</li>' +
    '</ul>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '<div class="post">' +
    '<div class="text">this is my first post</div>' +
    '<div class="image"><img class="img" src="assest/s.jpeg" alt="photo" srcset=""></div>' +
    '</div>' +
    '<hr class="top_hr">' +
    '<div class="react_container">' +
    '<div class="likes react"><i class="fas fa-thumbs-up i l"></i><span>Likes</span></div>' +
    '<div class="comments react"><i class="far fa-comment i"></i><span>comments</span></div>' +
    '<div class="share react"><i class="fas fa-share i"></i><span>share</span></div>' +
    '</div>' +
    '<hr class="bottom_hr">' +
    '<div class="owner_comment">' +
    '<img class="image"></img>' +
    '<input class="input" type="text" cols="40" rows="5" placeholder="write a public comment"></input>' +
    '<div class="attachment">' +
    '<i class="far fa-smile-beam i"></i>' +
    '<i class="fas fa-camera i"></i>' +
    '<i class="fas fa-paperclip i"></i>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</div>';
for (var i = 0; i < 5; i++) {
    container.innerHTML += '<li>' + Blog + '</li>';
}