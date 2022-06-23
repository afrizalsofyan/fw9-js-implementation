const words = "Saya belajar Javascript disini" 
let res = ""
let temp = ""
let arr = []
let arrLast = []
let arrNew = []
let i = 0
let x = words.length-1
let a = 0
let j = 0

while(i<=x){

    if(words[i]==0){
        arr[a]=temp
        a++
        temp=""
    } else {
        temp+=words[i] 
    }

    if(i==x){
        arrLast=temp
    }

    i++
}
let bb=0
for(let aa=0; aa<arr.length; aa++){
    arrNew[aa] = arr[aa]
    arrNew[arr.length] = arrLast
}
let y =arrNew.length-1
let temp2
for(j=y; j>=0;j--){
    res += arrNew[j] + " "
}
console.log(res);