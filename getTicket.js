console.log("Person1: Got the Ticket");
console.log("Person2: Got the Ticket");

const premovie=async ()=>{
    const wifepromisebringstickets=new Promise((resolve,rejected)=>{
        setTimeout(()=>{
         resolve("Ticket");
        },3000);
    })
const getPopCorn=new Promise((reslve,rejected)=>{
    reslve("Popcorn");
});

const getCandy=new Promise((reslve,rejected)=>{

    setInterval(()=>{
        reslve("Popcorn");
    },3000)
})
const getColdDrinks=new Promise((reslve,rejected)=>{
    setInterval(()=>{
        reslve("Cold Drinks");
    },3000)
});

let ticket = await wifepromisebringstickets;
let [pop,candy,coke]=await Promise.all([getCandy,getPopCorn,getColdDrinks]);
console.log(` Person 3:We got ${pop},${coke},${candy}`);
return ticket;

}

premovie().then((m)=>{

    console.log("and "+m);
})
console.log("Person4: Got the Ticket");
console.log("Person5: Got the Ticket");