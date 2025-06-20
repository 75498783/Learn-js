// const tinderuser = new objects()
 const tinderuser = {}
 tinderuser.id = "1234abc"
 tinderuser.name = "sunny"
 tinderuser.isLoggedIn = false
//  console.log(tinderuser);

const regularuser = {
    Email :"sunny@gmail.com",
    Fullname:{
        userfullname:{
        firstname : "sandip",
        Lastname: " Kumar "
    }

}
}

// console.log(regularuser.Fullname.userfullname.firstname);

const  obj1 =  {1: " a",2:"b"}
const  obj2 =  {3: " a",4:"b"}
const  obj4 =  {5: "a ",6:"b"}

//const obj3 = {obj1 , obj2}
//const obj3 = Object.assign({}, obj1,obj2,obj4)

const obj3 = {...obj1, ...obj2}
//console.log(obj3);

const users = [
    {
        id:1,
        Emaile : "sandip@gmail.com"
    },
    {
        id:1,
        Emaile : "sandip@gmail.com"
    },
    {
        id:1,
        Emaile : "sandip@gmail.com"
    },
]
users[1].Emaile
console.log(tinderuser);
console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));

console.log(tinderuser.hasOwnProperty('isLoggedIn'));