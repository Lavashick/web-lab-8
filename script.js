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

outputConsole("\nЗАДАНИЕ 3")
let matrixDimension = 8
let charToAdd = ""
allString = ""
for (let i = 0; i < matrixDimension; i++) {
    if (i % 2 == 0) {
        for (let j = 0; j < matrixDimension; j++) {
            if (j % 2 == 0) {
                charToAdd = "#"
            } else {
                charToAdd = " "
            }
            allString += charToAdd
        }
    } else {
        for (let k = 0; k < matrixDimension; k++) {
            if (k % 2 == 0) {
                charToAdd = " "
            } else {
                charToAdd = "#"
            }
            allString += charToAdd
        }
    }
    outputConsole(allString)
    allString = ""
}