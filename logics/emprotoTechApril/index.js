//~ =========== logics.1 ============
//& day1@company-18 april 2023

//! 1. print the duplicate values only one time 
// let arr=[1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6];
// for(let i=0;i<arr.length;i++){
//     for(let j=i;j<arr.length;j++){
//         if(arr[i]==arr[j]){
//             arr.splice(i,1)
//         }
//     }
// };
// console.log(arr);  //? [1, 2, 3, 4, 5]

//! 2. print values only one time in the given array(that might be unique vlue or duplicate value) 
// let arr=[1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6];
// let arr1=new Set(arr);
// console.log(arr1);  //? {1,2,3,4,5,6}

//! 3. print the values (not repeated/duplicate values) except duplicate values
// let arr=[1,1,2,2,3,4,4,5,6,7,7,8,9,9,9];
// let arr1=[];
// for(let i=0;i<arr.length;i++){
//     let count=0;
//     for(let j=0;j<arr.length;j++){
//         if(arr[i]==arr[j]){
//             count++;
//         }
//     }
//     if(count==1){
//         arr1.push(arr[i])
//     }
// };
// console.log(arr1);  //? [3, 5, 6, 8]

//! 4. in given word/name, print the each character, how many times repeats
// let name="emprototechnologies";  //? here we can use : let name=prompt("eneter name here")
// let character=[];
// for(let a of name){
//     if(character[a]){
//         character[a]+=1;
//     }else{
//         character[a]=1;
//     }
// };
// console.log(character);

//! 5. decimal to binary conversion
// let decimal=5;  //? here we can use : let decimal=prompt("eneter decimal here")
// let binary=decimal.toString(2);
// console.log(binary); //? 110

//^ one more way
// let decimal=5;  //? here we can use : let decimal=prompt("eneter decimal here")
// let binary=[];
// while(decimal>0){
//     if(decimal&1){
//         binary="1"+binary;
//     }else{
//         binary="0"+binary;
//     };
//     decimal=decimal>>1;
// };
// console.log(binary); //? 110


//& day2@company-19 april 2023

//! 6. string palindrome
// let str="malayalam";  //? here we can use : let str=prompt("eneter str here")
// let strStore="";
// for(let i=str.length-1;i>=0;i--){
//     strStore+=str.charAt(i);
// };
// console.log(strStore==str?"palindrome":"not palindrome");

//^ another way.1
// let str="gadag"; //? here we can use : let str=prompt("eneter str here")
// let strStore="";
// for(let i=str.length-1;i>=0;i--){
//     strStore+=str[i];
// };
// console.log(strStore==str?"palindrome":"not palindrome");

//^ another way.2
// let str="appa";  //? here we can use : let str=prompt("eneter str here")
// let str1=str.split("").reverse().join("");
// console.log(str1==str?"palindrome":"not palindrome");

//^ another way.3
// let str="amma"; //? here we can use : let str=prompt("eneter str here")
// let str1=[...str].reverse().join("");
// console.log(str1==str?"palindrome":"not palindrome"); 

//! 7. string reverse
// let str="manjunath"; //? here we can use : let str=prompt("eneter str here")
// let strRev="";
// for(let i=str.length-1;i>=0;i--){
//     strRev+=str.charAt(i);
// };
// console.log(strRev);

// //^ another way.1
// let str="doddanagouda";  //? here we can use : let str=prompt("eneter str here")
// let strRev="";
// for(let i=str.length-1;i>=0;i--){
//     strRev+=str[i];
// };
// console.log(strRev);

//^ another way.2
// let str="kirankumar";  //? here we can use : let str=prompt("eneter str here")
// let strRev=str.split("").reverse().join("");
// console.log(strRev);

//^ another way.3
// let arr="govindyadav";  //? here we can use : let str=prompt("eneter str here")
// let arrRev=[...arr].reverse().join("");
// console.log(arrRev);

//! 8. string anagram 
// let str1="pavitrad";  //? here we can use : let str1=prompt("eneter str1 here")
// let str2="vitrapad";  //? here we can use : let str2=prompt("eneter str2 here")
// let str3=str1.split("").sort().join("");
// let str4=str2.split("").sort().join("");
// console.log(str3==str4?"string anagram":"not string anagram");

//^ one more way
// let str1="mounikachm";  //? here we can use : let str1=prompt("eneter str1 here")
// let str2="chmkamouni";  //? here we can use : let str2=prompt("eneter str2 here")
// let str3=[...str1].sort().join("");
// let str4=[...str2].sort().join("");
// console.log(str3==str4?"string anagram":"not string anagram");

//! 9. armstrong number
// let num=153; //? here we can use : let num=Number(prompt("eneter num here"))
// let temp=num;  
// let sum=0;
// while(temp>0){
//     rem=temp%10;
//     sum+=rem*rem*rem;
//     temp=parseInt(temp/10);
// };
// console.log(sum==num?"armstrong number":"not armstrong number");

//! 10. reverse number
// let num=153;  //? here we can use : let num=Number(prompt("eneter num here"))
// let temp=num;
// let sum=0;
// while(temp>0){
//     rem=temp%10;
//     sum=sum*10+rem;
//     temp=parseInt(temp/10);
// };
// console.log(sum);











//~ =========== logics.1 ============
