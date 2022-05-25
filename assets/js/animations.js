const listCards = document.querySelectorAll(".cards");
const cards = document.querySelectorAll(".cards .card");
const texts = document.querySelectorAll(".title--highlight, .paragraph");
const dividers = document.querySelectorAll(".divider");
const buttons = document.querySelectorAll(".button--second");
const introductionContentBox = document.querySelector(".introduction__content-box");

const cardsClasses = [
    "card--animate-one",
    "card--animate-two",
    "card--animate-three"
];

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

            if (detectedSection) {
                card.classList.add(cardClass);
            } else {
                card.classList.remove(cardClass);
            }
        }
    });
}

function addAnimationFadeTo(parameter, direction, element) {
    const elementClass = "animate-fade-to-" + direction;
    
    if (parameter == "add") {
        element.classList.add(elementClass);
    } else if (parameter == "remove") {
        element.classList.remove(elementClass);
    }
}

function addAnimationOnTexs(texts) {
    for (let i = 0; i < texts.length; i++) {
        const text = texts[i];
        const detectedSection = detectSection(text.parentNode);

        if (detectedSection && text.tagName == "P") {
            addAnimationFadeTo("add", "top", text);
        } else {
            addAnimationFadeTo("remove", "top", text);
        }

        if (detectedSection && text.tagName == "H1") {
            addAnimationFadeTo("add", "right", text);
        } else {
            addAnimationFadeTo("remove", "right", text);
        }
    }
}

function addAnimationOnButtons(buttons){
    for (let i = 0; i < buttons.length; i++) {
        const button = buttons[i];
        const detectedSection = detectSection(button.parentNode);

        if(detectedSection) {
            addAnimationFadeTo("add", "left", button);
        } else {
            addAnimationFadeTo("remove", "left", button);
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
    addAnimationOnButtons(buttons);
}