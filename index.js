// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push("Ralph")
}

cats.length = 0;

cats.push("Milo", "Otis", "Garfield")

function destructivelyPrependCat(name) {
    cats.unshift("Bob")
}

cats.length = 0;

cats.push("Milo", "Otis", "Garfield")

function destructivelyRemoveLastCat(name) {
    cats.pop()
}

cats.length = 0;

cats.push("Milo", "Otis", "Garfield")

function destructivelyRemoveFirstCat(name) {
    cats.shift()
}

cats.length = 0;

cats.push("Milo", "Otis", "Garfield")

function appendCat(name) {
    let newCats = [...cats, name]
    return newCats
}
appendCat("Broom")


cats.length = 0;

cats.push("Milo", "Otis", "Garfield")

function prependCat(name) {
    let newCats = [name, ...cats]
    return newCats
}
prependCat("Arnold")


cats.length = 0;

cats.push("Milo", "Otis", "Garfield")

function removeFirstCat(name) {
    let newCats = cats.slice(1)
    return newCats
}


cats.length = 0;

cats.push("Milo", "Otis", "Garfield")

function removeLastCat() {
    let newCats = cats.slice(0, cats.length - 1)
    return newCats
}