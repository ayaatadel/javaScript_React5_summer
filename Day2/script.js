// input=prompt("Enter your name")
// document.writeln(input)
// document.writeln(`<h1>${input}</h1>`)

// var i=1
// while(i<=6)
// {
//     document.writeln(`<h${i}>${input}</h${i}>`)
//     i++
// }
// document.write("<p style='color:blue'> welcom from day2 </p>")


// var question= confirm("are you student")

// document.writeln(question)
// if(question)
// {
//     var q2=confirm("are you computerscience")
//     if(q2)
//     {
//         document.writeln("Welcome in ITI")
//     }else{
//         document.writeln("sorry you can't catch summer training")

//     }
// }else{
//     document.writeln("sorrrrrrrrrrrrry")
// }



/****************   Function , method */

// function=>  block of code that i can use in any way and any time


// var num1=5
// var num2=10
// var num3=15
// var num4=100
// sum=num1+num2
// sum2=num3+num4
// document.writeln(sum2)

// var num1=+prompt("Enter Number 1")
// var num2=+prompt("Enter Number 2")
// var  summation=0
// function sum(n1,n2)   
// {
//     summation=n1+n2
//     document.writeln(summation)
//     // return summation
// }

// document.writeln(sum(num1,num2)) 


//  function => prototype  name(parameters)
            //  => body  {..... => body}

/***
 * return    => return
 * void      => print  (console.log  , document.write line ,)
 * 
 * parametic => take parameters  fnName(p1,pa,...)
 * non parametic  => fnName()
 * 
 * how to use function => call function  => fnName()
 */


// function test() {   // not return , non parametic
//     document.writeln("Hello")
// }
// test()


// var n1=5
// var n2=10
// function test(n1,n2) {   // not return ,  parametic
//     document.writeln(n1+n2)
// }
// test(n1,n2)


// var no1=5
// var no2=10
// function test(n1,n2) {   // return ,  parametic
//     return n1+n2   // value
// }
// // var result=test(no1,no2)

// // document.writeln(result)

// document.writeln(test(no1,no2))


/*** Data types
 * int 
 * double
 * float
 * string
 * boolean
 * array
 * object
 */


// array =>   index => 0, length
    /**
     * get length of array => lenghth => arName.length
     */

// var arr=[1,2,3,4]   

// for(var i=0;i<arr.length;i++)
// {
//     // document.writeln("index"+i)  // index
//     document.writeln("<br>")  // index
     
//     document.writeln("<br>array Element "+arr[i])
    
// }



/**  funtions , methods => array
 * add element to array  => front , back
 * back => push => update => array
 * 
 * remove element from array => front , back
 * back => pop

*/

// var arr=[1,2,3]
// arr.push("ayaat")
// document.writeln(arr)  //[1,2,3,ayaat]
// arr.pop()
// document.writeln("<br>",arr)  //[1,2,3]


// shift => Removes the first element from an array and returns array.
// unshift =>
//Inserts new elements at the start of an array, and returns the new length of the array.

// arr.shift()  // [2,3]
// document.writeln("<br>",arr)
// arr.unshift("iti")  // [iti,2,3]
// document.writeln("<br>",arr)

/*********************************  spread operator   */
// var arr1=[1,2,3]
// var arr2=[5,6,7]

// var arr4=["ayaat","nada","leena"]
// //["ayaat","nada",1,2,3,"leena"]
// arr4=["ayaat","nada",...arr1,"leena"]
//  var arr3=arr1+arr2 //[1,2,35,6,7]
//  var arr3=[...arr1,...arr2]
//  arr3=arr1.push(...arr2)    // 6
//  arr3=arr1.push(arr2)    // 4

//   document.writeln(arr3) //[1,2,3,5,6,7] 
//   document.writeln(arr4) //[1,2,3,5,6,7] 
/*************************** */






// var arr4=arr1
// arr4.push(66)
//  document.writeln("<br>",arr4)  //[1,2,3,66]
//  document.writeln("<br>",arr1)   //  [1,2,3,66]



//  spread operator    ...

// var arr4=[...arr1]   // elements of arr1
// arr4.push(66)   
//  document.writeln("<br>",arr4)  //[1,2,3,66]
//  document.writeln("<br>",arr1)   //  [1,2,3]




// sort array => نرتب عناصر ال array

/**
 * sort => desc   // change on main array
 */
/**
 * reverse => reverse   // change on main array
 */

// var arr=[1,4,3,5]
// var arr=[1,4,3,"ayat",5,"mohammed","mahmoud"]
// var arr5=arr.sort()  //  ascii code  table  

// document.writeln(arr5)     // [1,3,4,5]
// document.writeln("<br>",arr)

/// sort ascending   => reverse array elemnts

// document.writeln("<br>",arr.reverse())
// document.writeln("<br>",arr)


// var arr=[100,200,'A',"a"]
// document.writeln(arr.sort()) 

// indexof()=>  return index of element in array
// element is already in array => index of element
// element not exist in array => -1 

// var arr=[1,3,15,10,114]
// document.writeln(arr.indexOf(114))  // 2
// document.writeln(arr.indexOf("A"))  // -1

// concat  => merge two arrays together 
//, includes  // check if element that you search in array or not
//   => return => boolean (true , false)
// var arr1=[1,2,"nada"]
// var arr2=[3,4,"ayaat",8,9]
// var arr3=arr1.concat(arr2)
// arr3.push("mohammed")
// document.writeln(arr3)  
// document.writeln("<br>",arr1)
// document.writeln(arr1.includes("nada"))




// string methods

// var str="React G5 ITI Summer Traning"

// get length of array

// document.writeln(str.length)


// convert string to upperCase

// document.writeln(str.toUpperCase())
// convert string to lowerCase

// document.writeln(str.toLowerCase())


// var str="React G5 ITI Summer Traning"

// document.writeln(str.charAt(10))
// document.writeln(str.charAt(-1)) //

// document.writeln("<br>  ************************ <br>")
// // at
// document.writeln(str.at(10))
// document.writeln(str.at(-1),"<br>")  // last elemt of array


// concat => merege two strings
// var str2="hello "

// str2=str2.concat(str)
// document.writeln(str2)


// str2=str2+str
// document.writeln(str2)



// repeat   => reapeat string
// var text="hello"
// document.writeln(text.repeat(3))



var str="            React G5 ITI Summer  Traning          "

// substring  => get specific string include start to end-1
// document.writeln(str.substring(0,13))
// document.writeln(str.substring(-7,13))  //=> start => 0  to 13 


// trim =>  remove white spaces from start and end
    
    // document.writeln(str.length)
    // document.writeln("<br>",str.trim().length)
    // document.writeln("<br>",str.trimStart().length)
    // document.writeln("<br>",str.trimEnd().length)


    