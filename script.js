const header = document.querySelector ("header");

window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 150);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open')
}

/* Created by Tivotal */

var swiper = new Swiper(".slider", {
    grabCursor: true,
    slidesPerView: 2,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


// whatsapp widget
let isChatboxVisible = false;
        const chatbox = document.querySelector(".WA_Chat_Widget .WA_ChatBox");
        function hideChatbox() {
            isChatboxVisible = false;
            chatbox.style.display = "none";
        }
        function toggleChatbox() {
            isChatboxVisible = !isChatboxVisible;
            chatbox.style.display = isChatboxVisible ? "block" : "none";
        }