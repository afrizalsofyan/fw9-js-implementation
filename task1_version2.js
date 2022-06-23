const text = "Malam" 
let rslt=""

rslt = text.toLowerCase().split('').reverse().join('')
if(rslt==text.toLowerCase()){
    console.log('Palindrome');
} else{
    console.log("Not Palindrome");
}