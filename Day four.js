// //hoisting for varables

// console.log(b);
// console.log(c);

// var b = 50
// let c = 100
// const f = 10.10

// console.log(b);
// console.log(c);
// console.log(f);

//hoisting for functions

// hoistinfun()
// function hoistinfun(){
//     console.log("hoisting for function");
    
// }
// hoistinfun()

// arrowfun()
// const arrowfun=()=>{
//     console.log("arrowfun");
    
// }
// arrowfun()

//scope of Function

// const b = 24

// function month(){


//     console.log("janurary");
//     console.log(b);
//     let f=21
//     console.log(f); 
//     function nested(){
//         console.log("February");
//         const names = "god"
//         console.log(names);
        
//     }
//     nested()
//     console.log(f);
    
// }
// month()


///interview question

// function month(){

//     console.log("march");

//     function month2(){
//         console.log("april");
        
//     }
    
//     return month2;
// }
// let resmonth = month() 
// resmonth()

//array 

// let array = [1000,2000,3000,4000,5000]
// console.log(array[1]);
// console.log(array.length);
// console.log(array);

// //array methods

// //push amd pop

// array.push(10000)
// console.log(array);

// array.pop(10000)
// console.log(array);

// //shift and unshift

// array.unshift(20000)
// console.log(array);

// array.shift(20000)
// console.log(array);


// //slice and splice

// let arr = array.slice(1,3)
// console.log(arr);


// // //splice 

// // const arrayspl = ["mani","kalki","guna","raja"]

// // arrayspl.splice(1,0,"kumar")
// // console.log(arrayspl);

// // arrayspl.splice(2,1,"muthu")
// // console.log(arrayspl);


// //for each map filter

// let looping = ["rohit","virat","yuvaraj","dhoni","pandiya"]

// looping.forEach((items,index)=>{
// console.log(items);
// console.log(index);

// console.log(`${index}=${items}`);



// })

// const resmap = looping.map((items,index)=>{

//     console.log(items);
//     console.log(index);

//     return items+2  
// })

 


// let looping = [50,100,150,200,250]

// let reslooping = looping.map((items)=>{
//     if(items>100){
//         return items
//     }
//    return null;
// })

// console.log(reslooping);

// console.log(looping);

// let loopfilter = looping.filter(i=>i>150);

// console.log(loopfilter);


//for of

// let arrex = [2,4,6,8,10]
// for(let num of arrex){
//   console.log(num);
//   if(num<6){
//     console.log(num);
    
//   }

// }

// object and Json

// let Teamorder ={
//     entryno : "1",
//     name : "sachin",
//     Type : "Batsman"
// }

// console.log(Teamorder);
// console.log(Teamorder.entryno);
// console.log(Teamorder.name);
// console.log(Teamorder.Type);

// console.log(Object.keys(Teamorder));
// console.log(Object.values(Teamorder));

// for(let order in Teamorder){
//     console.log(order);
//     console.log(`${order}=${Teamorder[order]}`);
    
// }

//json

// const jsondata = [
//     {
//     name:"arun",
//     Age:"6",
//     Standard: "First",
// },
// {
//     name:"kannan",
//     Age:"10",
//     Standard: "Fiveth",
// },

// {
//     name:"raju",
//     Age:"15",
//     Standard: "tenth",
// },

// ]

// jsondata.forEach((item)=>{

//     console.log(item.name);
//     console.log(item.Age);
//     console.log(item.Standard);
    
// })

// let jsonres = jsondata.map((item)=>{
//        console.log(item.name);
//        console.log(item.Age);
//        console.log(item.Standard);
       
//        if(item.Age>7){

//         return item;
//        }
//        return null;
       
// })

// console.log(jsonres);


// console.log(jsondata);

// let filterjson = jsondata.filter(item => item.Age>10)

// console.log(filterjson);




