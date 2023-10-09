// const dice=[1, 2, 3, 4, 5, 6,]

const dices=()=>{

    return Math.floor(Math.random() * 6)+1;
}
const game =(name)=>{

    while(1){
        const a=dices()
        console.log(a);
        
        if(a==3){
            console.log(name);
            break;
        }
    
    }
}

game('lasha')
game('giorgi')


