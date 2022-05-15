const informationCards = document.querySelectorAll(".cards .card");
const informationListCards = document.querySelectorAll(".cards");

const directions = ["right","top","left"];

window.addEventListener("load", ()=> {
    addAnimations();
})

window.addEventListener("scroll", ()=> {
    addAnimations();
})

function addAnimationOnCards(listsOfCards){
    listsOfCards.forEach(listOfCards => {
        const cards = listOfCards.querySelectorAll(".card");

        for (let i = 0; i < cards.length; i++) {
            const position = listOfCards.getBoundingClientRect()["y"];
            const card = cards[i];
            const direction = directions[i];
            const parameter = 500;
    
            if (position >= parameter) {
                if(direction == "right") {
                    card.style.transform = `translate(${(- position + parameter) / 5}%)`;
                } else if(direction == "left") {
                    card.style.transform = `translate(${(position - parameter) / 5}%)`;
                } else {
                    card.style.transform = `translateY(${(position - parameter) / 5}%)`;
                }
            } else {
                card.style.transform = "";
            }
        }
    });
}

function addAnimations(){
    addAnimationOnCards(informationListCards, informationCards);
}