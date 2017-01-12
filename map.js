const userList1 = [
  {
    name: "Jane Doe",
    hobbies: ["soccer", "boxing"],
    age: 29
  }, {
    name: "John Doe",
    hobbies: ["basketball"],
    age: 28
  }
];

// ===> [2, 1] turns into the count of the hobbies
//use a built in method called map give me an array(all the items you want to map)
  //and a callback function (call on every item in the array and will become the same positon and new array)


// function countHobbies(user) {
//   return user.hobbies.length;
// }


const customMap = function (data, callback) {
  const mappedValues = [];
  for(let i = 0; i < data.length; i++) {
    const current = data[i];
    const result = callback(current);
    mappedValues.push(result);
  }
  return mappedValues;
}


const countHobbies = function(user) {
  return user.hobbies.length;
}

usersList1.map(countHobbies);



//doubling numbers in the array
const num = [12, 24, 8.5];

const double = customMaps(nums, function(n) {
  return n *2;
});






















// const userList2 = [
//   {
//     name: "Jane Smith",
//     hobbies: ["painting", "pottery"]
//   }, {
//     name: "John Smith",
//     hobbies: ["photography"]
//   }
// ];

//"Jane Doe's hoobies are: ...."


// const forEach = function(data, callback){
//   for(var i = 0; i < data.length; i++) {
//     callback(data[i]);
//   }
// }


// const printUserHobbies = function(user) {
//   for (let i = 0; i < users.length; i++)
//     console.log(user.name + "'s hobbies are:" + user.hobbies);
// // if there was another category like ages, you would have to repeat this function over and over again for each category

const printUserHobbies = function(user) {
  console.log(user.name + "'s hobbies are:" + user.hobbies);

}
userList1.forEach(printUserHobbies)
userList2.forEach(printUserHobbies)
//usersList1.forEach(function(user[i])) //callback is expected in the parameter ()


}

// printUserHobbies(usersList1);
// printUserHobbies(usersList2);