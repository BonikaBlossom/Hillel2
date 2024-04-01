const matrix = [
    [1, 2, 3],
    [4, 5, 6, 2],
    [7, 8, 9, 0, 7]
  ];
  
  let sum = 0;
  
  for (let i = 0; i<matrix.length; i++) { // i = 0 
    for (let j = 0; j<matrix[i].length; j++) { // j = 1
     const currentValue = matrix[i][j];
     sum += currentValue;
    }
  }
  
  console.log(sum)



/*слова более 5 букв*/

  const lorem = 'Lorem ipsum dolor sit amet consectetur adipiscing elit';

const loremArray = lorem.split(' ');

for (let i = 0; i < loremArray.length; i++) {
	if(loremArray[i].length > 5) {
    console.log(loremArray[i]);
  }
}

/*сортировка слов*/

const lorem = 'Lorem ipsum dolor sit amet consectetur adipiscing elit';

const loremArray = lorem.split(' ');

function compareWords(word1, word2) {
  return word1.length - word2.length
}

loremArray.sort(compareWords);

const loremString = loremArray.join(' ');

console.log(loremString);

//1
let str = '';
for (let i = 20; i <= 30; i=i+0.5) {
  str += i + ' ';
}
console.log(str.trim());


//2
alert('10$=270grn');
alert('20$=540grn');
alert('30$=810grn');
alert('40$=1080grn');
alert('50$=1350grn');
alert('60$=1620grn');
alert('70$=1890grn');
alert('80$=2160grn');
alert('90$=2430grn');
alert('100$=2700grn');



//3
const a = 40;
for (let i = 1; i <= 100; i++){
  console.log(i**2 ; i <= a)
}

for (let i = 40; i < 100; i++) {
  if (i === 40) { continue; }
console.log(i**2);
}

//4
let n = 10;

for (let i = 2; i <= n; i++) { 

  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue;
  }

  alert( i );
}


//5
function isPowerOfThree(num) {
  while (num % 3 == 0) {
    num /= 3;
  }
  return num == 1;
}

console.log(isPowerOfThree(81));
console.log(isPowerOfThree(126));


//ДЗ 4. Складніші цикли
let 



//ДЗ 5. Пошук у масиві
let arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
let positiveArr = arr.filter(function(number) {
  return number > 0;
});

alert( positiveArr );
let result = positiveArr.reduce(function(sum, current) {
  return sum + current;
}, 0);

alert( result );

const array = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

  const minValue =  array.reduce((acc ,currentValue, index) => {
    if(acc.min > currentValue) {
      return { min: currentValue, minIndex: index }
    }
    return acc
  }, { min: null, minIndex: null })
  console.log(minValue)


  const array = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

  const maxValue =  array.reduce((acc ,currentValue, index) => {
    if(acc.max < currentValue) {
      return { max: currentValue, maxIndex: index }
    }
    return acc
  }, { max: null, maxIndex: null })
  console.log(maxValue)


  let arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
  let negativArr = arr.filter(function(number) {
    return number < 0;
  });
  
  alert( negativArr );


  let arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
  let positiveArr = arr.filter(function(number) {
  if(number > 0 && number % 2 !==0)
    return number ;
  });
  
  alert( positiveArr );
    

  let arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
  let positiveArr = arr.filter(function(number) {
  if(number > 0 & number * 2 !==0)
    return number ;
  });
  
  alert( positiveArr );
  



  //ДЗ 6. Рахунки користувачів
  let users = [
    {
    "index": 0,
    "isActive": true,
    "balance": "$2,226.60",
    "name": "Eugenia Sawyer",
    "gender": "female",
    "phone": "+1 (840) 583-3207",
    "address": "949 John Street, Rose, Puerto Rico, 1857"
    },
    {
    "index": 1,
    "isActive": true,
    "balance": "$2,613.77",
    "name": "Pauline Gallegos",
    "gender": "female",
    "phone": "+1 (985) 593-3328",
    "address": "328 Greenpoint Avenue, Torboy, North Dakota, 6857"
    },
    {
    "index": 2,
    "isActive": false,
    "balance": "$3,976.41",
    "name": "Middleton Chaney",
    "gender": "male",
    "phone": "+1 (995) 591-2478",
    "address": "807 Fleet Walk, Brutus, Arkansas, 9783"
    },
    {
    "index": 3,
    "isActive": true,
    "balance": "$1,934.58",
    "name": "Burns Poole",
    "gender": "male",
    "phone": "+1 (885) 559-3422",
    "address": "730 Seba Avenue, Osage, Alabama, 6290"
    },
    {
    "index": 4,
    "isActive": true,
    "balance": "$3,261.65",
    "name": "Mcfadden Horne",
    "gender": "male",
    "phone": "+1 (942) 565-3988",
    "address": "120 Scholes Street, Kirk, Michigan, 1018"
    },
    {
    "index": 5,
    "isActive": false,
    "balance": "$1,790.56",
    "name": "Suzette Lewis",
    "gender": "female",
    "phone": "+1 (837) 586-3283",
    "address": "314 Dunne Place, Bawcomville, Guam, 9053"
    }
    ]
    function usersCheck(users) {
      let usersMax2000 = [];
    
      for (let user of users) {
        let tmp = +user["balance"].replace(/[^0-9.]/g, '');
        if (tmp > 2000) {
          usersMax2000.push(user);
        }
      }
      return usersMax2000;
    }
    function usersBalanceSumm(users) {
      let sum = 0;
    
      for (let user of users) {
        let tmp = +user["balance"].replace(/[^0-9.]/g, '');
        sum += tmp * 100;
      }
      return sum / 100;
    }
    let usersResult = usersCheck(users);
    
    console.log('More $2000');
    for (user of usersResult) {
      console.log(user['name']);
    }
    
    
    console.log(`${usersBalanceSumm(usersResult)}`);
    
    console.log(`${usersBalanceSumm(users)}`);




    //ДЗ 7. Реалізуйте функцію removeElement

    let arr = [1,2,3,4,5,6];
    let element = 5;
    let removeElement = arr.find(item => item == element);
    
    if(removeElement){
      arr.forEach(function(item, i){
        if(item == element){
          arr.splice(i, 1);
        }
      });
    }
    console.log('result', arr);


    //ДЗ 8. Рекурсивне зведення в ступінь
    long int pow(long int x, unsigned int n)
    {
    if (n==0)
      return 1;
      else if (n==1)
          return x;
      else if (n % 2 == 0 )
           return pow( x * x, n/2);
      else
           return pow( x * x, n /2)*x;
    }



    //ДЗ 9. Функція із замиканням

    function getSum () {
      let sum = 0;
      return function (x) {
      sum += x;
        return sum;
      }
    }
    let sum = getSum();

    console.log(sum(3)); 
    console.log(sum(5)); 
    console.log(sum(20));

    //ДЗ 10. this chain
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    alert( this.step );
    return this;
  }
};

ladder.up().up().down().showStep();