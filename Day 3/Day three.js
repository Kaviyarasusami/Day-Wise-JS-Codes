//function

// //normal function

// let a=10;
// function firstfunction(){

//     console.log("Nor Fun");
//  console.log(a);
    
// }

// firstfunction()
// Firstfun()

// function Firstfun(){

//     console.log("kaviyarasu");
    
// }
// Firstfun()

// firstfunction()

//Arrow FUNCTION

// const ArrowFun=()=>{

// console.log("Currently working");

// }
// ArrowFun()

//anonymous function

// const anony = function (a,b) {

//     console.log(a,b);
       
    
// }
// anony(10,20)

// const anonyName=function (c,d) {
//     console.log(c,d);

    
// }

// anonyName(25,26)

//IIFE

// (function(){
//     console.log("my age is 26");

    
// })();

// (function(){
//     let a=10
//     let b=25

//        console.log(a*b);
    
// }());

// //return function 

// function RetuRnFunction(x,y){

//     console.log("My Villiage is Very clean every day");
//     return x+y ;

    
// }

// let resmyVillage = RetuRnFunction(50,50)

// console.log(resmyVillage);

// console.log(RetuRnFunction(50,50));

// // higher order function

// function HigerorderFun(callback){

//     console.log("Sachin is My fave Cricket player");
//     return function(){
//         console.log("he is reteried in cricket");
//         console.log("at the age of 40");
             
        
//     }    
// }

// let sachin=HigerorderFun(RetuRnFunction)
// sachin()

// function HighOrdFun(callback){

//     console.log("India Prime Minister")
//     return function modi(){
//         console.log("Last 15 years he is an prime minister");
//         console.log("Curret year Also her Part is Win");
//         callback()
//     }
    
    
    
    
// }

// let primemins=HighOrdFun(function modiji(){ console.log("he is age of 70");
// })
// primemins()


//if Else 

// let Dhoni = "Dhoni is not indian team cricket player"

// if(Dhoni == "Dhoni is one of indian team cricket player"){

//     console.log("Dhoni is one of indian team cricket player");
    
// }else{

//     console.log("Dhoni is one of indian team cricket player");
    

// }

// else if


// let Tatashareprice = 499;

// if(Tatashareprice >=1085){
//    console.log(">=1085");
   
// }else if(Tatashareprice >=900){
//     console.log(">=900");

// }else if(Tatashareprice >=800){
//     console.log(">=800");

// }else if(Tatashareprice >=500){
//     console.log(">=500");
// }else{
//     console.log("Below 500");
    
// }

//nested if Condition

// let RajaTotalmark = 795

// if(RajaTotalmark>=700){

//     if(RajaTotalmark <=770){
//         console.log("<=770");
        
//     }else{
//         console.log(">=800");
//     }
    

// }else{
//     console.log("<700");
    

// }

//Ternery Concept

// let Todaytotalsalesbriyani = 70;

// const sell = Todaytotalsalesbriyani > 100 ? "cross the 100" : "below the 100";
// console.log(sell);

// switch

// let Coubord = 8 ;
// let Display;

// switch(Coubord){

//     case 1:
//         Display = "Tommato";
//         break;
//     case 2:
//         Display = "Onion";
//         break;

//     case 3:
//         Display = "Carot";
//         break;
//     case 4:
//         Display = "bag";
//         break;
//     default:
//         Display = "no items"
// }

// console.log(Display);

// while loop

// let k = 7

// while(k>=4){
// console.log("k=",k);
// k--;

// }

//do while loop

// let k =15;
// do{
// console.log("k=",k);
// k++;


// }while(k<=5)

// //for loop

// for (let s = 8; s>6;s--){
//     console.log("s=",s);
    
// }