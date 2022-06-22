const words = "Saya belajar Javascript" 
let res = ""
let temp = ""
let arr = []
let i = 0
let x = words.length-1
let a = 0

while(i<=x){
    if(words[i]==" "){
        arr.push(temp)
        temp = ""
    } else{
        temp += words[i]
    }
    i++
}

if(temp){
    arr.push(temp)
}

a = arr.length-1
while(a>=0){
    // console.log(arr[a])
    res += arr[a]+" "
    a--
}

console.log(res)

