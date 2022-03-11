function getDomNodesBySelector(selector) {
    // Ваш код
    return Array.from(document.querySelectorAll(selector))
}

console.log(getDomNodesBySelector('.price-value'));