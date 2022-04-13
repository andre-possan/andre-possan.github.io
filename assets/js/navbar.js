const header = document.querySelector(".header");
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

function changeNavBackground(attribute){
    if(attribute == "add") {
        header.classList.add("header--highlight");
        navList.classList.add("header__nav--highlight");
    } else {
        header.classList.remove("header--highlight");
        navList.classList.remove("header__nav--highlight");
    }
}

mobileMenu.addEventListener("click", () => {
    openMenu(navList)
    addItensAnimation(navItens);
    if(open == true) {
        changeNavBackground("add");
    } else {
        if(window.scrollY < 20) {
            changeNavBackground("remove");
        }
    }
})

window.addEventListener("scroll", ()=> {
    if(window.scrollY > 20) {
        changeNavBackground("add");
    } else if(open == false) {
        changeNavBackground("remove");
    }
})