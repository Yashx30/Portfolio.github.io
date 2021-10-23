$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass('sticky')
        } else {
            $('.navbar').removeClass('sticky')
        }

    })

})

var typed = new Typed(".typing", {
    strings: ['WebDeveloper', 'WebDesigner', "Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
})
var typed = new Typed(".typing-2", {
    strings: ['WebDeveloper', 'WebDesigner', "Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
})








// var clicked=false
let btn = document.getElementById('menu-btn')
btn.addEventListener('click', () => {
    let toggle1 = document.getElementById('menu1')
    toggle1.classList.toggle("active")










})


    // let toggle=document.getElementsByClassName('navbar menu')
    // if (toggle.style.display === "none") {
    //     toggle.style.display = "block";
    //   } else {
    //     toggle.style.display = "none";
    //   }
