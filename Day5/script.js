// hoisting
// ternary operator
// console.log(x);
// let x=5; 
// var x=5;
// Synchronous , Asynchrouns Functions  (setInterval , SetTimeOut)
// Bom
// search=>Slice , Splice



/** Hoisting
 *  user variale before decleration
 */
// x=5;   // change undefined to 5
// console.log(x);
// console.log(y);

// var x;  // undefined
// var y;  // undefined
// var z=null;  // null
// console.log(z);



// differenet between undefined , null
// null => value => no thing
// undefined => value for variable has declare (var x;)=> x:undefined  but not assignment

// assiignment  => x=10; => has value


// ternary operator (condition)?true:false
// var x=10;
// var y=5;
// if(x>y)
// {
//     console.log(x);
    
// }else{
//     console.log(y);
    
// }

// (x>y)?console.log(x):console.log(y);
// var x=10;
// var y=10;
// if(x>y)
// {
//     console.log(x);
    
// }else if(y>x){
//     console.log(y);
    
// }else{
//     console.log("equal");
    
// }

// (x>y)?console.log(x):(y>x)? console.log(y):console.log("equal");



/********  Synchrounous , Asynchrounous Function
 * Synchrounous => line by line
 * Asynchrounous => time , 
  */

// synchrounous 
// function first()
// {
//     console.log("first");
//      second();  
//     console.log("third");
    
// }
// first()
// function second () {
//     console.log("second");
// }


// Asynchrounous  => function => time => setTimeOut, SetInterval
//  Event => fire Event 


// setInterval=>  repeat depend on time  (ms)=> 1000ms=1s
// clear InterVal => stop InterVal
// var interval=setInterval(() => {
//     console.log("React G5");
    
// }, 1000);


// setTimeOut => execute code after time  => ms=> 1000ms=1s
// clear TimeOut => stop execute setTimeOut
// var timeOut=setTimeout(() => {
//     console.log("hello");
    
// }, 5000);

// clearTimeout(timeOut)


// setTimeout(() => {
//     clearInterval(interval)
    
// }, 3000);


// function first() {
//     console.log("first");
//     console.log("third");
    
// }
// setTimeout(() => {
//     console.log("second");
    
// }, 2000);
// setTimeout(() => {
//     console.log("fourth");
    
// }, 0);

// first()
// first third fourth second   

setTimeout(() => {

   console.log("first");  //  first   second third
   

   setTimeout(() => {
    console.log("second");
    
   }, 500);
   setTimeout(() => {
    console.log("third");
    
   }, 1000); 
   setTimeout(() => {
    console.log("third");
    
   }, 2000); 
   setTimeout(() => {
    console.log("third");
    
   }, 3000); 
   setTimeout(() => {
    console.log("third");
    
   }, 4000); 

}, 2000);

// call Back Hell  => problem that was result of calling setTimeOut in another SetTimeOut 
// promises => ES6

