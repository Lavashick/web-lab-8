function outputConsole(text) {
    console.log(text)
}

outputConsole("ЗАДАНИЕ 1")
let numSheep = prompt("Введите число овечек: ")
for (let i = 1; i <= numSheep; i++) {
    outputConsole(i + " овечка...")
    if (i == numSheep) {
        outputConsole("Овечки кончились :(")
    }
}


outputConsole("\nЗАДАНИЕ 2")
let start = 0
let finish = 15
for (let i = 0; i < finish; i++) {
    if (i % 2 == 0) {
        outputConsole(i + " чётное")
    } else {
        outputConsole(i + " нечётное")
    }
}