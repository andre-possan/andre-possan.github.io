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
    const classHeader = ["header--highlight-border","header--highlight-background"];
    const classNav = ["header__nav--highlight-border", "header__nav--highlight-background"];

    if(attribute == "add") {
        header.classList.add(classHeader[0],classHeader[1]);
        navList.classList.add(classNav[0], classNav[1]);
    } else {
        header.classList.remove(classHeader[0],classHeader[1]);
        navList.classList.remove(classNav[0], classNav[1]);
    }
}

mobileMenu.addEventListener("click", () => {
    openMenu(navList)
    addItensAnimation(navItens);
    changeNavBackground("add");

    if(open == true) {
        header.classList.remove("header--highlight-border");
    } else {
        if(window.scrollY < 20) {
            changeNavBackground("remove");
        }
    }
})

window.addEventListener("scroll", ()=> {
    if(window.scrollY > 20) {
        changeNavBackground("add");
        if(open == true) {
            header.classList.remove("header--highlight-border");
        }
    } else if(open == false) {
        changeNavBackground("remove");
    }
})