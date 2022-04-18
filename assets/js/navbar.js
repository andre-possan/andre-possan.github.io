const header = document.querySelector(".header");
const mobileMenu = document.querySelector(".header__nav__mobile-menu");
const navList = document.querySelector(".header__nav__list");
const navItens = document.querySelectorAll(".header__nav__list__item");

function changeNavBackground(attribute) {
    const classHeader = "header--highlight";

    if (attribute == "add") {
        header.classList.add(classHeader);
    } else {
        header.classList.remove(classHeader);
    }
}

let open = false;
function openMenu(navList) {
    if (open == false) {
        navList.classList.add("active");
        mobileMenu.classList.add("active");

        
        navList.classList.add("header__background--highlight");
        changeNavBackground("add");

        open = true;
    } else {
        navList.classList.remove("active");
        mobileMenu.classList.remove("active");

        if(window.scrollY < 20) {
            changeNavBackground("remove");
        }

        open = false;
    }
}

function addItensAnimation(itens) {
    itens.forEach((item, i) => {
        if (item.style.animation != "") {
            item.style.animation = "";
        } else {
            item.style.animation = `navLinkFade 500ms ease forwards ${i / 8}s`;
        }
    });
}

mobileMenu.addEventListener("click", () => {
    openMenu(navList)
    addItensAnimation(navItens);

    if(open == true) {
        header.classList.add("header--border-none");
    } else {
        header.classList.remove("header--border-none");
    }
})

window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
        changeNavBackground("add");
    } else if (open == false) {
        changeNavBackground("remove");
    }
})