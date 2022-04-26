const title = document.querySelector("#introduction__title-typing");
const words = [
    "sou programador Front-End",
    "gosto de tecnologia :D",
    "gosto de aprender!"
]
const delayToWriteCharacter = 100;
const delayToWritePhrase = delayToWriteCharacter * 80;
const delayToRestart = delayToWritePhrase * words.length;


function textWrite(element, list,i) { 
    if(list[i-1] != undefined && list[i].indexOf("gosto de") != -1 && list[i-1].indexOf("gosto de") != -1) {
        const text = list[i].split("gosto de");
        var textArray = text[1].split("");
    } else {
        var textArray = list[i].split("");
    }

    textArray.forEach((letter, i) => {
        setTimeout(() => element.innerHTML += letter, delayToWriteCharacter * i)
    });
}

function textWriteReverse(text, element, addition){
        const textArray = text.split("")
        textArray.reverse();
    
        textArray.forEach((item, i) => {
            setTimeout(() => {
                const arraySlice = textArray.slice(1 * (i + 1));
                arraySlice.reverse();
                const arrayString = arraySlice.toString();
                const arrayResult = arrayString.replace(/,/g, "");

                if(addition != undefined) {
                    element.innerHTML = addition + arrayResult;
                } else {
                    element.innerHTML = arrayResult;
                }
            }, (delayToWriteCharacter - 20) * i)
        });
}

function textRemove(element, list, i) {
    if ((list[i]).indexOf("gosto") != -1 && list[i+1] != undefined && list[i+1].indexOf("gosto") != -1) {
        const text = element.innerHTML.split("gosto de");
        textWriteReverse(text[1], element, "gosto de");
    } else {
        textWriteReverse(element.innerHTML, element);
    }
}

function main() {
    for (let i = 0; i < words.length; i++) {
        setTimeout(() => {
            textWrite(title, words, i);

            setTimeout(() => {
                textRemove(title, words, i);
            }, delayToWritePhrase / 2)
        }, delayToWritePhrase * i)
    }
}


main();
setInterval(() => {
    main();
}, delayToRestart);