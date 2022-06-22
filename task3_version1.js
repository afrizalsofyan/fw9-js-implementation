function divideAndSort(num){
    var numStr = num.toString()
    let lg = numStr.length
    let arr=[]
    let temp = 0
    let res = []
    for(let i = 0; i < lg; i++){
        
        if(numStr[i]==0){
            arr = [...`${temp}`]
            temp=""
        } else {
            temp += numStr[i]
            
        }
        
    }

    for (let j = 0; j < arr.length - 1; j++){
        if (arr[j] > arr[j + 1]){
            let x = arr[j]
            arr[j] = arr[j + 1]
            arr[j + 1] = x
            j = -1   
    
        } 
        
    }
    return arr
        
}
console.log(divideAndSort(5956560159466056))

