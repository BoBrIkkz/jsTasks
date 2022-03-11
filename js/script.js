const data = guestsInfo;
/*
В переменной data хранится такой массив:
[
  {name: "Саша", age: 19},
  {name: "Катя", age: 21},
  {name: "Миша", age: 17},
  {name: "Федя", age: 23},
  {name: "Клава", age: 22}
]
*/

function calcAvgAge(array) {
    // Напишите код здесь
    let age = 0
    array.forEach(e => {
        age += e.age
    });
    return age / array.length
}