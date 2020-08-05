const limit=100;
//limit+=100;
console.log(limit);

let ar=`which is contatinated`;
let tlit =  `Hey this is a template string ${ar}`;
console.log(tlit);
//spread operator

let a=[20,30,40];
let b=[10, ...a, 50];// ... is called spread operator
console.log(b);

function collect(...a){//rest operator
    console.log(a);
}
collect(3,4,5);
let z=[35,55,66];
let[four,five]=z;
let[one,two,q]=z;
console.log(four+" "+five+" "+one+" "+two+" "+q);
let king={name:'Murtaza', id:'1'};
let{name, id}=king;
console.log(name+" "+id);//will print Murtaza 1
 //arrow functions
setTimeout(() => {//async arrow fubction. setTimeout is an arrow function
    console.log("Wohoo!");
},3000);

let cheer = ()=> {console.log("Cheer up");}
cheer();
//map helper method
let m=[20,30,40];
let doubled= m.map((n)=> (n*2));
console.log(doubled);//prints 40 60 80

//filter helper method
let points=[10,20,33,21,44,13,14];
let sevendiv=points.filter((n)=>(n%7==0));
console.log(sevendiv);//prints 21 and 14

//string helper methods 
let re="wohooo"+"xo".repeat(20);
console.log(re);//includes,startswith,endswith are some others

let map1= new Map();
let key1="string_key";
map1.set(key1,"value against string key");
console.log(map1);

let numberset=[[1,'One'],[2,'Two'],[3,'Three']];
let valueMap= new Map(numberset);
console.log(valueMap);
for(let [key,value] of valueMap.entries()){
    console.log(`${key} points to ${value}`);
}
//closure implementation
let call=()=>{
   let secret="ES6 Rocks";
    let reveal=()=>{
        console.log(secret);
    }
    return reveal;
}
let unveil=call();
unveil();

//function factory
const addSuffix=(x)=>{
    const concat= (y)=>{
        return y+x;
    }
    return concat;
}
let add_ness= addSuffix("ness");
console.log(add_ness);
let add_happi= add_ness("happi");
console.log(add_happi);//prints happiness

//private methods
 const budget=()=>{
     let balance=0;
     let changeBal=(val)=>{
        return balance+=val;
     }
     const deposit20=()=>{
         changeBal(20);
     }

     const check=()=>balance;//balance is a variable which is private
     const draw20=()=>balance-20;
     return{// object (say named s) with key as named deposit20 and value as called method deposit20
         deposit20: deposit20,
         check:check,
         draw20:draw20
     }
 }
 let wallet=budget();
 console.log(wallet);//prints object s
 wallet.deposit20();
 console.log("Aftet checking "+ wallet.check());// prints 20
 console.log("After deduction "+wallet.draw20());

 //generator
// function countMaker(){
//     let count=0;
//     while(count<3){
//         yield count+=1;
//     }
// }
// let countGen=countMaker();
// console.log(countGen.next().value);

let p= new Promise((resolve,reject)=>{
    reject('Reject a prommise data');
})
p.then((response)=>console.log(response))
  .catch((error)=>console.log(error));

//promise chaining
const root='http://jsonplaceholder.typicode.com/posts/1';
fetch(root,{method:"GET"})
.then(response=>response.json())
.then(response=>console.log(response));