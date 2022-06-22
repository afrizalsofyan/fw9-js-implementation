function divideAndSort(num){
    var numStr = num.toString()
    let lg = numStr.length
    let arr=[]
    let temp = 0
    let res = []
    for(let i = 0; i < lg; i++){
        arr.push(numStr[i])
        // if(numStr[i]==0){
        //     arr.push(temp)
        //     temp=""
        // } else {
        //     temp += numStr[i]
        // }
    }

    // if(temp){
    //     arr.push(temp)
    // }

    // for(let a = 0; a<arr.length; a++){
    //     res.push( arr[a])
    //     for(let b=0; b<res.length; b++){
    //        if(res[b]!=0){
    //         if (res[b] > res[b + 1]){
    //             let x = res[b];
    //             res[b] = res[b + 1];
    //             res[b + 1] = x;
    //             b = -1;   
        
    //         }
    //        }
            
    //     }
    // }
    for (let j = 0; j < arr.length - 1; j++){
        if(arr[j]!=0){
            if (arr[j] > arr[j + 1]){
                let x = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = x;
                j = -1;   
        
            }
        
        }
    }
    return arr
        
}
console.log(divideAndSort(5956560159466056))

