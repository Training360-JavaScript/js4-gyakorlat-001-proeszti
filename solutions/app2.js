
// Fájl: solutions/app2.js
// Függvény neve: sorterPromise
// Export: a sorterPromise függvény legyen a default export!
// Írj egy függvényt, amely paraméterként szintén egy tömböt kap. A függvény visszatérési értéke egy Promise.
// A Promise resolved lesz, amennyiben a tömb minden eleme string, és visszatér ezek abc-rend szerint rendezett tömbjével.
// Ha nem minden elem string, akkor a Promise rejected lesz, visszatérési értéke: Error: Not all elements are string type!
const sorterPromise = (arr) => new Promise((resolve, reject) {
    if (arr.every(item => typeof item === "string")) {
        resolve(arr.sort())
    } else {
        reject("Error: Not all elements are string type!")
    }
   
)
}





export default sorterPromise;
