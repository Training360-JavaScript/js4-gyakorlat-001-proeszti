
// Fájl: solutions/app1.js
// Függvény neve: converterPromise
// Export: a converterPromise függvény legyen a default export!
// Írj egy olyan függvényt, amely paraméterként kap egy tömböt. A függvény visszatérési értéke egy Promise.
// A Promise resolved lesz, amennyiben a tömb minden eleme string, és azok sikeresen nagybetűssé alakíthatók:
//  tehát a Promise visszaad egy új tömböt, amely az eredeti tömb összes elemét nagybetűssé alakítva tartalmazza.
// Ellenkező esetben a Promise rejected lesz, a visszatérési érték pontosan: Error: Not all elements are string type!

const converterPromise = (arr = []) => new Promise((resolve, reject) => {


    if (arr.every(item => typeof item === "string")) {
        resolve(arr.map(item => item.toUpperCase()))
    } else {
        reject("Error: Not all elements are string type!")
    }

    // return myPromise;

})





export default converterPromise;
