const text = "malam" 
let rslt=""
let x = text.length - 1

while (x >= 0) {
    rslt += text[x]
    x -= 1
}
if(rslt == text){
    console.log (`Palindrome`)
} else {
    console.log("Not Palindrome");
}


