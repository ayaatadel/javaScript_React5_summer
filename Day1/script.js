// comment => single line (//)
/*
multible line
*/ 

/*print 
     1- console
     
     */

// console.log("Hello")  // print in console
// // alert("Hello group react")
// document.writeln("Hello") // print on html
// prompt("What is your name")// take data from user


// variables  => palce in memory can store value

// var  x=5.5;
// // java script => losely type   => can know data type of variable from its value

// // typeof(x) // get type of variable;
// var s="ayaat"
// var b=true
// var a=[1,2,3]
// console.log(typeof(x));
// console.log(typeof(s));
// console.log(typeof(a));
// console.log(typeof(b));


// dataypes  in java script
// number , string , boolean , object {},array [] , undefined , null



// mathimatical operators (+,*,-,/,%,**)
// var num1=5;
// var num2=10;
// console.log(num1+num2);


// // mod => باقي القسمه
// console.log(num2%num1);

// num2/num1=0.0

// console.log(2**3);


// increment  (++), decrement(--) 

// var num=5;
// // console.log(num++);
// console.log(++num);  //6
// console.log(--num);  //5
// console.log(num--);//5  =..>  4
// console.log(num);//5  =..>  4

//  logical operators

/**  
 * &&  and     => true => all conditions give true 
 * ||   or     =>  true => only one condition give true
 * not  (!)     => true=>false  , false => true
 */

// var x=10;
// var y=10
// var z=5
// console.log(!((x<y)||(x==y)));


// write code to get two numbers from user and print summation
// var num1=+prompt("enter number one") // string  20
// // var num2=+prompt("enter number 2")  // 20
// var num2=Number(prompt("enter number 2"))  // 20

// console.log(num1+num2); //2020

// "ayat" +"adel" = ayat adel
// // prompt  => take data as string
// // +prompt => take data an integer (numeric)
// // number (prompt) => take data an integer (numeric)


// = (assignment) x=5, ==  (value=value)=> codition,=== (value,datatype )


// coditional statemment   => جمل شرطيه
// true , fale => if, if-else , if-elseif-else , switch

// var num="5";
// var x=5
// console.log(x===num);
// console.log(x==num);

// if(num==5)
// {
//     console.log("number is 5");
    
// }

// if(num==5)
// {
//     console.log("number is 5");
    
// }
// else{
//  console.log(num);
 
// }
// var num=14
// if(num==5)
// {
//     console.log("number = 5");
    
// }else if (num>5) {
//     console.log("number > 5");
// } else {
//     console.log("number < 5");   
// }


// var grade =70;
//  a > 85 , b >75, c >65 ,d>50

// if(grade>85)
// {
//     console.log("a");

// }else if (grade>75) {
    //     console.log("b");
    
    // } else if(grade>65) {
        //     console.log("C");
        // }else if(grade>50){
            //     console.log("D");
            
            // }else{
                //     console.log("Fail");
                
                // }
               
 var grade =+prompt("Enter student grade");
switch (True) {
    case grade>85:
        console.log("A");
        break;
    case grade>75:
        console.log("B");
        break;
    case grade>65:
        console.log("C");
        break;
    case grade>=50:
        console.log("D");
        break;
    default:
        console.log("Fail");
        break;
}
// switch (grade) {
//     case >85:
//         console.log("A");
        
//         break;
//     case  >=75:
//         console.log("B");
        
//         break;
//     case >=65:
//         console.log("c");
        
//         break;
//     case >=50:
//         console.log("D");
        
//         break;

//     default:
//         console.log("fail");
        
//         break;
// }

// iterations   loop  => for , while , do-while


// # print numbers from 1 to 10

//   for(strat , condition , increment ,decrement)
// == start for fist time then condition then after codition is true then (increnemt, decrement )  => condition ...
// var number=1;
// for (var number = 1;number<=10; number++) {
//    console.log(number);
// }
// var number=1
// for(;number <=10;)
// {
//         console.log(number);
//         number++
// }

// for(;;){} // infinity loop

// #  while
// var number=1
// while(number<10)
// {
//    console.log(number);
//     number++;  
// }

// do-while
// 
// var number=1
// do{
//     console.log(number); // 1  2  3   4  5  6  7 8  9   10
//     number++ 
// }while(number<=10)

// true 1 , false 0
if(0)
{

}