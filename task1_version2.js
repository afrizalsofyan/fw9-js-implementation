const text = "malam" 
let rslt=""

rslt = text.split('').reverse().join('')
// console.log(rslt);
if(rslt==text){
    console.log('Palindrome');
} else{
    console.log("Not Palindrome");
}