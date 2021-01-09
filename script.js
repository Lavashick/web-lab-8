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

outputConsole("\nЗАДАНИЕ 4")

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
let num1 = randomInteger(-150, 150)
let num2 = randomInteger(-70, 70)
let num3 = randomInteger(-36, 36)
let arr = [num1, num2, num3]
console.log("Исходные числа: ", arr)
for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
            arr[j] += arr[j + 1];
            arr[j + 1] = arr[j] - arr[j + 1];
            arr[j] -= arr[j + 1];
        }
    }
}
console.log("Сортированные числа: ", arr)


outputConsole("\nЗАДАНИЕ 5")
let num4 = randomInteger(-150, 150)
let num5 = randomInteger(-150, 150)
let num6 = randomInteger(-150, 150)
let num7 = randomInteger(-150, 150)
let num8 = randomInteger(-150, 150)
arr2 = [num4, num5, num6, num7, num8]
console.log("Исходные числа: ", arr2)
let maxNum = -151
for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] > maxNum)
        maxNum = arr2[i]
}
console.log("Максимальное число: ", maxNum)