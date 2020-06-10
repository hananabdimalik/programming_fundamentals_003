//Q1

numbers = [2, 3, 4, 5, 6, 7, 8, 9]

let count = 0

const totalNumbers = numbers.forEach(number => {
 count = count + number
})

console.log(count)

//Q2

nums = [50, 75, 100, 125, 150]

const higherThan = nums.filter(num =>{
  if (num > 100){
    return true
  }else {
    return false
  }
})

console.log(higherThan)

//Q3

const allNums = [2, 3, 7, 9, 12, 16, 23]

const oddNumer = allNums.filter(num =>{
  if(num % 2 === 1){
    return true 
  }else {
    return false
  }
})

console.log(oddNumer)

//Q4


const name = ['sam', 'dan', 'emily','josh']

let nameArray  = []

const capitalName = name.map(names =>{
nameArray.push(names.charAt(0).toUpperCase()+ names.slice(1))
})

console.log(nameArray)

//Q5
const otherNames = ['Sally', 'Jacob', 'William', 'Kiki']

const nameLength = otherNames.filter(names =>{
  if(names.length > 5){
    return true
  }else {
    return false 
  }
})
console.log(nameLength)

//Q6
const someFloatNums = [1, 1.5, 3, 4.8, 6.9, 9, 11, 17.4]

const wholeNumbers = someFloatNums.filter(num =>{
  if(Math.floor(num)=== num){
    return true;
  }else {
    return false
  }
})

console.log(wholeNumbers)

//Q7

let sum =0

const moreFloatNumbers = someFloatNums.forEach(numb =>{
if(Math.floor(numb)=== numb){
  sum = sum + numb
}
})

console.log(sum)

//Q8

let account = 0

const countOfFloatNums = someFloatNums.forEach(total =>{
// if(Math.floor(total) !== total)
if(total % 1 !=0){
  account++
}
return account
});

console.log(account)

//Q9

const sqrNumbs = [3, 5, 7, 10]

const squareNumbers = sqrNumbs.map(nums =>{
  return nums * nums
})

console.log(squareNumbers)


//Q10

const people = [
  {
    name: 'Bob', 
    age: 29, 
    profession: 'cook'
  }, 
  {
    name: 'Samuel', 
    age: 32, 
    profession: 'Technologist', 

  }, 
  {
    name: "Sally", 
    age: 35,
    profession: "Surgeon"
  },
  {
    name: "Ed", 
    age: 17,
    profession: 'student'
  }, {
    name: 'Emily', 
    age: 44,
    profession: 'lawyer'
  }, {
    name : 'Ahmed', 
    age: 50,
    profession: 'lawyer'
  }
]

const selectName = people.map(names =>{
  return names.name
})

console.log(selectName)

//Q11

const ageFilter = people.filter(person=>{
  if(person.age > 18){
    return true;
  }else {
    return false;
  }
})

console.log(ageFilter)


//Q12


let countOf = 0

const numOfLawyers = people.forEach(person => {
  if(person.profession === 'lawyer'){
    countOf ++
  }
})

console.log(countOf)
