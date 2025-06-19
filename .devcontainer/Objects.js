// singleton 
 
// objects literals
const Mysym = Symbol("key1")
    const Jsuser = {
        name : "Sandip",
        "full name": " Sandip Kumar",
        Age : 21,
        Email : "sandip123@gmail.com",
        Location:"Bihar",
        [Mysym]: "mykey1",
        isLoggedIn : false,
        LastlogginDays : ["Monday","Saturday"]
    }
// console.log(Jsuser.Email)
// console.log(Jsuser["Email"])
// console.log(Jsuser["full name"])
// console.log(Jsuser[Mysym])


Jsuser.Email = "sandipgpt123@gmail.com"
Object.freeze(Jsuser)
Jsuser.Email = "hitesh@gpt.com"
console.log(Jsuser);

Jsuser.greeting = function(){
    console.log("Hello js user");
}
console.log(Jsuser.greeting());