/****************  Function 
 * regular
 * expression
 * arrow
 * callback
 * for of
 * for in
 * object  => handle array of objects
 * Event
 */


// function => return , not return , parametic, non parametic


// function => prototype , body
// use function => call


//**************   regular functions  */

// function test()
// {
//     console.log("Hello");

// }

// test()

// function sum(n1=15,n2=5)  // default values paramerts
// {
//     return n1+n2;
// }


// console.log(sum(2,10));


//***********   Expression functions ***/


// var result=function expression() {
//     console.log("Expression function");

// }
// result()

// var result=function expression(n1=16,n2=17) {  // default values
//    return n1+n2;

// }
// console.log(result(2));


//   arrow function  

// var result=(n1=16,n2=17)=>{ 
//     return n1+n2;
//  }
//  console.log(result(2));


// call back function  => function => call another function


//  function log(n=10)
//  {
//     console.log(n);  // 5

//  }
//  function summation(n1,n2,log) {

//     console.log(n1+n2);  //2+5=7
//  }
//  summation(2,5,log())



// iteration array  => loop
//  for   , for of , for in


// var array=[2,5,"mohammed",7,15,"ayaat"]

// for (let index = 0; index < array.length; index++) {
//    console.log( array[index]); 
// }


// for (var element of array) {   // values of array
//     console.log(element);

// }

// for (let index = 0; index < array.length; index++) {
//    console.log( index); 
// }
// for (var index in array) {
//     console.log(index);
// }
///////////////////////////// object

// var product={
//     "name":"lab1",
//     "type":"dell",
//     price:20000
// }
// console.log(product["name"]);
// var products = [
//     {
//         "name": "lab1",
//         "type": "dell",
//         "price": 20000
//     },
//     {
//         "name": "lab2",
//         "type": "hp",
//         "price": 25000
//     },
//     {
//         "name": "lab3",
//         "type": "mac",
//         "price": 50000
//     },
// ]
// // console.log(products[1]["name"]);

// var table = document.createElement("table")  // <table>
// var thead = document.createElement("thead")    // <thead>
// var tbody = document.createElement("tbody")     // <tbody>
// var thName = document.createElement("th")       // <th>  name
// var thType = document.createElement("th")       // <th>   type
// var thPrice = document.createElement("th")      // <th>   price

// thName.innerText = "Name"
// thPrice.innerText = "Price"
// thType.innerText = "Type"


// thead.append(thName, thType, thPrice)
// table.append(thead, tbody)
// document.body.append(table)
// table.classList.add('table', 'table-bordered')
// var tr;
// var tdType;
// var tdName;
// var tdPrice;
// for (const element of products) {
//     //  console.log(element); // object {name: 'lab1', type: 'dell', price: 20000}
//     // console.log(element["name"]);
//     // console.log(element["price"]);
//     // console.log(element["type"]);
//     // console.log(element["type"],element["price"]);

//     /************************************************** */
//     // table => column -> name , type ,price , rows

//     tr = document.createElement("tr")   //<tr>
//     tdType = document.createElement("td");
//     tdName = document.createElement("td");
//     tdPrice = document.createElement("td")
//     tdName.innerText = element["name"]
//     tdType.innerText = element["type"]
//     tdPrice.innerText = element["price"]
//     tr.append(tdName, tdType, tdPrice)
//     tbody.append(tr)

// }





///**********   Event  */

// Action => Element  

// html =. function  => not secure
// onEvent => onClick
//  addEventListener


// function clickMe()
// {
//     console.log("hello");
    
// }
// var button=document.getElementById("btn")   //select
// button.onclick=function()
//     {
//         console.log("hello");
        
//     }
// button.onclick=()=>{
//         console.log("hello");
        
//     }
    
// var button=document.getElementById("btn")   //select

// button.addEventListener("click",()=>{
//     console.log("Hello");
    
// })
// button.addEventListener("click",function(){
//     console.log("Hello");
    
// })

// Different between onEvent , addEventListener
// OnEvent  =>  element has more than event => execute last event
// addEventListener => element has more than event => execute all Events
// add Event Listener more clever than onEvent in Errors 


// it prefer to use AddEventListener

//  var button=document.getElementById("btn") 

//  button.onclick=()=>{
// console.log("ayaat");

//  }
//  button.onclick=()=>{
// console.log("nada");

//  }
//  button.onclick=()=>{
// console.log("ameena");

//  }


//  button.addEventListener("click",()=>{
//     // console.log("nada");
//    var h1= document.createElement("h1")
//    h1.innerText="Eveeeeeeeent"
//    document.body.append(h1)
//  })
//  button.addEventListener("click",()=>{
//     document.body.style.cssText=`
//        background-color: #cdcddf;
// `
//  })
//  button.addEventListener("click",(e)=>{
//     // console.log("ammena");
//     console.log(e.target);
    
//  })




// toggle password
var button=document.getElementById("btn") 
var input=document.getElementById("pass") 
button.addEventListener("click",()=>{
    input.setAttribute("type","text")
    button.innerText="hidden"
    button.addEventListener("click",()=>{
        input.setAttribute("type","password")
         button.innerText="show"
    })
})








 








