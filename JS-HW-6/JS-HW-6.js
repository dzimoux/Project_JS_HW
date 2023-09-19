// let helloA = 'hello world'
//
// console.log(helloA)


let arrL = 'Hello world';
let arrLl = 'lorem ipsum';
let arrLll = 'javascript is cool'


console.log(arrL.toUpperCase())
console.log(arrLl.toUpperCase())
console.log(arrLll.toUpperCase())

console.log(arrL.toLowerCase())
console.log(arrLl.toLowerCase())
console.log(arrLll.toLowerCase())



let str = ' dirty string   '
console.log(str.replaceAll ('   ', ''))


let str1 = 'Ревуть воли як ясла повні';

function strToArray(strin){
    let aStrin = strin.split(' ');
    return aStrin
}

console.log(strToArray(str1))



let ArrS = [10,8,-7,55,987,-1011,0,1050,0];

console.log(ArrS.map(function(o){
    return o.toString()
}))



let nums = [11,21,3];

console.log(nums.sort( function (a,b){
        return a - b;
    }
))

// function sortNums  (numers,ascending,descending) {
//     if(ascending){
//         console.log(numers.sort( function (a,b){
//                 return a - b;
//             }
//         ))
//
//     } else if (descending){
//         console.log(numers.sort( function (a,b){
//                 return b - a;
//             }
//         ))
//
//     }return numers
//     }
//
//
//
// console.log(sortNums(nums,ascending))


let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

console.log(coursesAndDurationArray.sort((a,b)=> {
    return b.monthDuration - a.monthDuration
}))


console.log(coursesAndDurationArray.filter((i)=> i.monthDuration > 5 ))

let newArr2 = coursesAndDurationArray.map(l => l.id = 334445 )
console.log(newArr2)




const cards = [
    {cardSuit:'spade', value: '6', color:'black'},
    {cardSuit:'spade', value: '7', color:'black'},
    {cardSuit:'spade', value: '8', color:'black'},
    {cardSuit:'spade', value: '9', color:'black'},
    {cardSuit:'spade', value: '10', color:'black'},
    {cardSuit:'spade', value: 'jack', color:'black'},
    {cardSuit:'spade', value: 'queen', color:'black'},
    {cardSuit:'spade', value: 'king', color:'black'},
    {cardSuit:'spade', value: 'ace', color:'black'},
    {cardSuit:'diamond', value: '6', color:'red'},
    {cardSuit:'diamond', value: '7', color:'red'},
    {cardSuit:'diamond', value: '8', color:'red'},
    {cardSuit:'diamond', value: '9', color:'red'},
    {cardSuit:'diamond', value: '10', color:'red'},
    {cardSuit:'diamond', value: 'jack', color:'red'},
    {cardSuit:'diamond', value: 'queen', color:'red'},
    {cardSuit:'diamond', value: 'king', color:'red'},
    {cardSuit:'diamond', value: 'ace', color:'red'},
    {cardSuit:'heart', value: '6', color:'red'},
    {cardSuit:'heart', value: '7', color:'red'},
    {cardSuit:'heart', value: '6', color:'red'},
    {cardSuit:'heart', value: '7', color:'red'},
    {cardSuit:'heart', value: '8', color:'red'},
    {cardSuit:'heart', value: '9', color:'red'},
    {cardSuit:'heart', value: '10', color:'red'},
    {cardSuit:'heart', value: 'jack', color:'red'},
    {cardSuit:'heart', value: 'king', color:'red'},
    {cardSuit:'heart', value: 'ace', color:'red'},
    {cardSuit:'clubs', value: '6', color:'black'},
    {cardSuit:'clubs', value: '7', color:'black'},
    {cardSuit:'clubs', value: '8', color:'black'},
    {cardSuit:'clubs', value: '9', color:'black'},
    {cardSuit:'clubs', value: '10', color:'black'},
    {cardSuit:'clubs', value: 'jack', color:'black'},
    {cardSuit:'clubs', value: 'queen', color:'black'},
    {cardSuit:'clubs', value: 'king', color:'black'},
    {cardSuit:'clubs', value: 'ace', color:'black'},
    {cardSuit:'clubs', value: '6', color:'black'},
    {cardSuit:'clubs', value: '7', color:'black'},
]


function isSpade(p){
    if (p.cardSuit === 'clubs' && p.value === 'ace'){
        return p
    }

}
console.log(cards.filter(isSpade))


console.log(cards.filter((r)=> r.color === 'red'))

console.log(cards.filter((d)=> d.cardSuit === 'diamond'))

function isMoreNine (n) {
    let valueA = parseInt(n.value);
    if (valueA >= 9 && n.cardSuit === 'clubs'){
        return n
    }
}
console.log(cards.filter(isMoreNine))


console.log(cards.reduce(function (accumulator, j){
    if(j.cardSuit === 'spade'){
        accumulator[0].push(j)
    } else if(j.cardSuit === 'diamond'){
        accumulator[1].push(j)
    } else if(j.cardSuit === 'heart'){
        accumulator[2].push(j)
    } else {accumulator[3].push(j)}
    return accumulator
},[[],[],[],[]]))








let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];



function isSass (s){
    if (s.modules.includes('sass')){
        return s
    }
}

console.log(coursesArray.filter(isSass))


function isDocker (d){
    if (d.modules.includes('docker')){
        return d
    }
}

console.log(coursesArray.filter(isDocker))

