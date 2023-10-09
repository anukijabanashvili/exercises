const users = [
    { name: 'Temo', age: 25 },
    { name: 'Lasha', age: 21 },
    { name: 'Ana', age: 28 }
]



const lowestAge = (a) => {
    let minAge = a[0].age;
    let name;
    a.forEach((a) => {
        if (a.age < minAge){
            minAge=a.age;
            name=a.name;
        }   
    })
     return name;
}



console.log(lowestAge(users));