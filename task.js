function getDomNodesBySelector(selector) {
    // Ваш код из прошлого задания
    return Array.from(document.querySelectorAll(selector))
}

console.log(getDomNodesBySelector('.price-value'));

function applyDiscount() {
    // Ваш код
    let count = 0
    let sum = 0
    const arr = getDomNodesBySelector('.price-value')
    count++
    if (count > 1) {
        return
    } else {
        arr.forEach(elem => {
            elem.textContent = elem.textContent - (elem.textContent * 0.15)
            sum += +elem.textContent
            document.querySelector('.total-price-value').textContent = sum
        })
    }

}



document.querySelector('.total__button').addEventListener('click', () => {
    applyDiscount()
})