let arr = [
  1,
  { key:'item'},
  3,
  'Second item',
  5,
  6,
  7,
  8,
  true,
  {name: 'Dima'}
]

console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[3])
console.log(arr[4])
console.log(arr[5])
console.log(arr[6])
console.log(arr[7])
console.log(arr[8])
console.log(arr[9])



// ----------------------------------------------------------------

let book1 ={
  title:'Eneida',
  pageCount:75,
  genre:'Burlesque-travesty poem'
}

let book2 ={
  title:'Kobzar',
  pageCount:250,
  genre:'Poetry'
}

let book3 ={
  title:'Taras Bulba',
  pageCount:340,
  genre:'Historical novel'
}


// ----------------------------------------------------------------

let book4 ={
  title:'Eneida',
  pageCount:75,
  genre:'Burlesque-travesty poem',
  authors: [{name: 'Ivan Kotliarevskyi'},
    {age:46}]
}

let book5 ={
  title:'Kobzar',
  pageCount:250,
  genre:'Poetry',
  authors: [{name: 'Taras Shevchenko'},
    {age:37}]
}

let book6 = {
  title: 'Taras Bulba',
  pageCount: 340,
  genre: 'Historical novel',
  authors: [{name: 'Mykola Hohol'},
    {age: 33}]
}
// ----------------------------------------------------------------


let users = [
  {name:'Ira',
  username:'Irishka-23',
    password:'33ssrfw'
  },
  {name:'Alina',
    username:'alisha333',
    password:'wefwefwef'
  },

  {name:'Oksana',
    username:'oksi-3ee3',
    password:'fthrhffg'
  },

  {name:'Katya',
    username:'katka__shmatka',
    password:'rthrthdf'
  },


  {name:'Andriy',
    username:'andriiko33223',
    password:'ethgrtlhkrl'
  },


  {name:'Oleh',
    username:'king-of_2',
    password:'yukyukkfff'
  }
,

  {name:'Elya',
    username:'potreblyad_43',
    password:'defgefgeg'
  },

  {name:'Maxym',
    username:'volf_334454',
    password:'hlkrthlkre'
  },


  {name:'Volodya',
    username:'toi-sho-ne-putin-3232',
    password:'fhfgjkkuku'
  },

  {name:'Mykola',
    username:'nick_4444',
    password:'jjhljhljw'
  }
]

console.log(users[0].password)
console.log(users[1].password)
console.log(users[2].password)
console.log(users[3].password)
console.log(users[4].password)
console.log(users[5].password)
console.log(users[6].password)
console.log(users[7].password)
console.log(users[8].password)
console.log(users[9].password)

// ----------------------------------------------------------------

let x = 23;

if (x != 0){
  console.log('Вірно!')
}
else {
  console.log('Невірно!')
};






x = 1;
if (x != 0){
  console.log('Вірно!')
}
else {
  console.log('Невірно!')
};





x = 0;
if (x != 0){
  console.log('Вірно!')
}
else {
  console.log('Невірно!')
};





x = -1;
if (x != 0){
  console.log('Вірно!')
}
else {
  console.log('Невірно!')
};


// ----------------------------------------------------------------

let time = 0;
let firstPart =[];
let secondPart = [];
let thirdPart = [];
let fourthPart =[];

let container = [firstPart, secondPart, thirdPart, fourthPart];
time = 5;


if (time < 15 || time === 0) {
  firstPart.push(time)}
 else if (time < 30 && time > 15) {
  secondPart.push(time)}
else if (time < 45 && time > 30) {
    thirdPart.push(time)}
    else if (time <= 59 && time > 45) {
      fourthPart.push(time)}


console.log(container)


time = 33;

if (time < 15 || time === 0) {
  firstPart.push(time)}
else if (time < 30 && time > 15) {
  secondPart.push(time)}
else if (time < 45 && time > 30) {
  thirdPart.push(time)}
else if (time <= 59 && time > 45) {
  fourthPart.push(time)}

console.log(container)



// ----------------------------------------------------------------

let day;
let firstMonth =[];
let secondMonth =[];
let thirdMonth =[];
let month = [firstMonth, secondMonth, thirdMonth]
day = 23;
 if (day >=0 && day < 10){
   firstMonth.push(day)
 } else if (day > 10 && day < 20){
   secondMonth.push(day)
 } else if (day > 20 && day < 30){
   thirdMonth.push(day)
 }

console.log(month)

// ----------------------------------------------------------------

let dayPlanner = prompt('Write your day of the week')

switch (dayPlanner) {
  case "Monday":
    console.log('Monday!');
    alert('Monday!')
break;

  case "Tuesday":
    console.log('Tuesday!');
    alert('Tuesday!')
    break;

  case "Wednesday":
    console.log('Wednesday!');
    alert('Wednesday!')
    break;

  case "Thursday":
    console.log('Thursday!');
    alert('Thursday!')
    break;

  case "Friday":
    console.log('Friday!');
    alert('Friday!')
    break;


}



// ----------------------------------------------------------------


let numberOne = 9

let numberTwo = 4


 if(numberOne > numberTwo){
  console.log(numberOne)
} else if (numberTwo > numberOne){
  console.log(numberTwo)
} else if (numberOne === numberTwo){
  console.log(numberOne + ' and ' + numberTwo + ' are equal')
}





























// ----------------------------------------------------------------

let x1 = prompt ('Continue sentence. Hto ne skache, toi..?')

switch (x1){
  case"Poliak":
    alert ('No!')
    break;

  case"Kozak":
    alert ('No')
    break;

  case"Moskal":
    alert('YESS!')
break;

  default:
    '??????????'


}






















// ----------------------------------------------------------------


let coursesAndDurationArray = [
  {title: 'JavaScript Complex', monthDuration: 5},
  {title: 'Java Complex', monthDuration: 6},
  {title: 'Python Complex', monthDuration: 6},
  {title: 'QA Complex', monthDuration: 4},
  {title: 'FullStack', monthDuration: 7},
  {title: 'Frontend', monthDuration: 4}
];

for (let i = 0; i < coursesAndDurationArray.length; i++) {













  const coursesAndDurationArrayElement = coursesAndDurationArray[i];
  if (coursesAndDurationArray[i].monthDuration > 5){
    console.log('Super!')
  }

}


