const mobileMenu = document.querySelector(".header__mobile-menu");
const navList = document.querySelector(".header__nav");
const navItens = document.querySelectorAll(".header__item");


let open = false;
function openMenu(navList) {
    if (open == false) {
        navList.classList.add("active");
        mobileMenu.classList.add("active");

        open = true;
    } else {
        navList.classList.remove("active");
        mobileMenu.classList.remove("active");

        open = false;
    }
}

function addItensAnimation(itens) {
    itens.forEach((item, index) => {
        if(item.style.animation != "") {
            item.style.animation = "";
        } else {
            item.style.animation = `navLinkFade 500ms ease forwards ${index / 8}s`;
        }
    });
}

mobileMenu.addEventListener("click", () => {
    openMenu(navList)
    addItensAnimation(navItens);
})