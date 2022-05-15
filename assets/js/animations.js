const listCards = document.querySelectorAll(".cards");
const cards = document.querySelectorAll(".cards .card");
const texts = document.querySelectorAll(".title--highlight, .paragraph");
const dividers = document.querySelectorAll(".divider");

const circleTest = document.querySelector(".circle-test");
const circleTest2 = document.querySelector(".circle-test2");

const directions = ["right", "top", "left"];

window.addEventListener("load", () => {
    addAnimations();
})

window.addEventListener("scroll", () => {
    addAnimations();
})

function detectSection(section) {
    const checkpoint = window.pageYOffset + window.innerHeight;
    const checkpoint2 = window.pageYOffset;
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const checkpointStart = sectionTop <= checkpoint;
    const checkpointEnd = sectionTop >= checkpoint2;

    circleTest.style.top = `${checkpoint - 64}px`;
    circleTest2.style.top = `${checkpoint2}px`;

    if (checkpointStart && checkpointEnd) {
        return true;
    } else {
        return false;
    }
}

function addAnimationOnCards(listsOfCards) {
    listsOfCards.forEach(listOfCards => {
        const cards = listOfCards.querySelectorAll(".card");

        for (let i = 0; i < cards.length; i++) {
            const card = cards[i];
            const direction = directions[i];

            if (detectSection(card.parentNode) && direction == "right") {
                card.classList.add("card--animate-to-right");
            } else {
                card.classList.remove("card--animate-to-right");
            }

            if (detectSection(card.parentNode) && direction == "left") {
                card.classList.add("card--animate-to-left");
            } else {
                card.classList.remove("card--animate-to-left");
            }

            if (detectSection(card.parentNode) && direction == "top") {
                card.classList.add("card--animate-to-top");
            } else {
                card.classList.remove("card--animate-to-top");
            }
        }
    });
}

function addAnimationOnTexs(texts) {
    for (let i = 0; i < texts.length; i++) {
        const text = texts[i];

        if (detectSection(text.parentNode) && text.tagName == "P") {
            text.classList.add("paragraph--animate");
        } else {
            text.classList.remove("paragraph--animate");
        }

        if (detectSection(text.parentNode) && text.tagName == "H1") {
            text.classList.add("title--highlight--animate");
        } else {
            text.classList.remove("title--highlight--animate");
        }
    }
}

function addAnimationOnDividers(dividers) {
    for (let i = 0; i < dividers.length; i++) {
        const divider = dividers[i];

        if (detectSection(divider.parentNode)) {
            divider.classList.add("divider--animation");
        } else {
            divider.classList.remove("divider--animation");
        }
    }
}

function addAnimations() {
    addAnimationOnCards(listCards, cards);
    addAnimationOnTexs(texts);
    addAnimationOnDividers(dividers);
}