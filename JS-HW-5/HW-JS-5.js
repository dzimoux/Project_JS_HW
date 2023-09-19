const area = (a,b) => a * b;


console.log (area(3, 6))




let p = 3.14;
let circle = (r) => {

    let areaC = p * r ** 2;
    return areaC;
}

let o = circle (6);
console.log(o)



let cylinder = (R,H) => {
    let areaCyl = 2 * p * R * H;
    return areaCyl;
}

console.log(cylinder(4,7))





let intake = (i) => {
    for (let j = 0; j < i.length; j++) {
        const iElement = i[j];
        console.log(iElement)
    }

}


let arrOfEl  = [2,5,true,'hello']

 console.log(intake(arrOfEl))






let paragraph = (text) => {
    document.write(`<div><p>Hey!${text}</p></div>`)

}


let pText = paragraph('How are you?')



let ul1 = (argum) => {
    document.write(`<ul>
<li>${argum}</li>

<li>${argum}</li>

<li>${argum}</li>
</ul>`)
}



let liArg = `Wake up`
console.log(ul1(liArg))


// --------------------------------------------
// function ul2 (argumen, numb){
//     for (const arguman of argumen) {
//         argumen =
//         }
//         return argumen
//     }
//     document.write(`<ul>
// <li>${argumen}</li>
//
// </ul>`)
// }
//
// let liArgum = `It's 7a.m`
// console.log(ul2(liArgum, 4))

// -----------------------------------------------------------------


let primitive = (z) => {
    for (let i = 0; i < z.length; i++) {
        const zElement = z[i];

        document.write(
            `<ul>
<li>${zElement}</li>
</ul>`
        )
    }
}


let arrd = [true, 6,'hello']
console.log(primitive(arrd))


 separBlock = arr2 => {
    for (const arr2Element of arr2) {
        document.write(`<div>${arr2Element.name} ${arr2Element.id} ${arr2Element.age}</div>`)
    }

}





let testarr = [{id:3334,
    name: 'Oleh',
    age: 34},

    {id:3534,
        name: 'Olena',
        age: 24},

    {id:2574,
        name: 'Olexandr',
        age: 32}]

console.log(separBlock(testarr))

smallestNumb = numbArr => {
    for (const numbArrElement of numbArr) {
        if (numbArrElement <= 3){
            console.log(numbArrElement)
        }
    }


}

let arr3 = [5,6,3,7,8,9,10]

console.log(smallestNumb(arr3))


function sum(arr) {
    let result = 0;
    for (const arrElement of arr) {

        result = result + arrElement;

    }
    return result
}

let arr4 = [4,6,2,7,8,2]

console.log(sum(arr4))





function swap(arr1,index1,index2){
    for (let i = 0; i < arr1.length; i++) {

        if (index1 === 0){
            arr1[i] = arr1[i+1];
            break} else if (index2 === 1) {
            arr1[i+1] = arr1[i];
        }


    }
    return arr1
}

let arr5 = [3,6,44,22]
console.log(swap(arr5,0,1))






// exchange(sumUAH,currencyValues,exchangeCurrency)



