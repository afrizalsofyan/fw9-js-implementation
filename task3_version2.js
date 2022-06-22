function divideAndSort(num){
    const arrNum = num.toString().split('0')
    let res = ''

    arrNum.map(el=>{
       return res += el.split('').sort().join('')
    })
    console.log(res)
    console.log(arrNum);
}
divideAndSort(5956560159466056)