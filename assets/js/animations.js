const listCards = document.querySelectorAll(".cards");
const cards = document.querySelectorAll(".cards .card");
const texts = document.querySelectorAll(".title--highlight, .paragraph");
const dividers = document.querySelectorAll(".divider");
const windowWidth = window.innerWidth;


const cardsClasses= [
    "card--animate-one",
    "card--animate-two",
    "card--animate-three"
];

console.log(windowWidth);

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
    const checkpointStart = sectionTop <= checkpoint - 100;
    const checkpointEnd = sectionTop >= checkpoint2 - 100;

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
            const cardClass = cardsClasses[i];
            const detectedSection = detectSection(card.parentNode);

            if(detectedSection) {
                card.classList.add(cardClass);
            } else {
                card.classList.remove(cardClass);
            }
        }
    });
}

function addAnimationOnTexs(texts) {
    for (let i = 0; i < texts.length; i++) {
        const text = texts[i];
        const detectedSection = detectSection(text.parentNode);

        if (detectedSection && text.tagName == "P") {
            text.classList.add("paragraph--animate");
        } else {
            text.classList.remove("paragraph--animate");
        }

        if (detectedSection && text.tagName == "H1") {
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