const users = {  name: 'Ana', age: 28 };
const newObj = (a)=>{
    const obj2 = {...a};
    return obj2;   
}

let a = newObj(users);
console.log(a);
// console.log(users);
users.name='nino';
console.log(a);

