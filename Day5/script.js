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

// setTimeout(() => {

//    console.log("first");  //  first   second third
   

//    setTimeout(() => {
//     console.log("second");
    
//    }, 500);
//    setTimeout(() => {
//     console.log("third");
    
//    }, 1000); 
//    setTimeout(() => {
//     console.log("third");
    
//    }, 2000); 
//    setTimeout(() => {
//     console.log("third");
    
//    }, 3000); 
//    setTimeout(() => {
//     console.log("third");
    
//    }, 4000); 

// }, 2000);

// call Back Hell  => problem that was result of calling setTimeOut in another SetTimeOut 
// promises => ES6




//********************  */

// var button=document.getElementById("btn")
// // button.addEventListener('click',()=>{
// //    open("https://www.pexels.com/","_blank")
// // })
// button.addEventListener('click',()=>{
//    open("https://www.pexels.com/","_self","width=500px,height=500px")
// })



//************   Slice , Splice   */

// slice => Returns a copy of a section of an array (start,end)
// ==> return start to end-1
// ==> doesn't change in main array

// ==>  (start , end-) => -1 => end-1

// splice => add , delete , replace


// var arr=[1,2,3,10,15]
    
// console.log(arr.slice(0,-2)); // -1=> start to end-1   => 1
// console.log(arr);


// splice   1- add  (start,0,element)
//          2- replace (start,1,elements)
// [1,2,3,10,15]
// console.log("arrray before splice",arr);
// [1,2,3,10,15]
// arr.splice(1,0,20)      // add
// [1, 20, 2, 3, 10, 15]   // add
// arr.splice(1,0,"ayaat","nada")  
// [1, "ayaat","nada",20, 2, 3, 10, 15]

// arr.splice(1,1,"ayaat","nada")  // replace => index (1)=>"ayaat nada"


// arr.splice(0,3) // delete (start of delete, number of elemnts that delete)
// var arr=[1,2,3,10,15,"ayaat","nada",true,false,2.2,'hh','xx']
// // arr.splice(-1,3)   // end, count-1  => 
//    //  [1, 2, 3, 10, 15, 'ayaat', 'nada', true, false]
// // [1,2,3,10,15,"ayaat","nada",true,false,2.2]
// console.log(arr);

// arr.splice(-3,4)
// console.log("arrray after splice",arr);


//  BOM  => Browser Object Model   => browser => window
// select using id
// var window;
// // open page
// btn.addEventListener("click",()=>{
//    // console.log("hello");
//    pageOpen= open("https://www.pexels.com","_blank")
   

// })
// // close open page
// cls.addEventListener("click",()=>{
//    pageOpen.close()
// })

// jp.addEventListener("click",()=>{
//     window.location.href="https://www.javatpoint.com/browser-object-model"
//   })

// close current window
// cls.addEventListener("click",()=>{
//    window.close()
// })
var pageOpen;
btn.addEventListener("click",()=>{
  // console.log("hello");
  pageOpen= open("https://www.pexels.com","_self")
  

})

// console.log(window.history.back().url);  // previous
// console.log(window.history.forward().url); // next
// window.history.go(1) => 1 => forward , -1 => back

// jp.addEventListener("click",()=>{
// window.history.go(1)

// })