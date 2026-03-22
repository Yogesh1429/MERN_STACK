//coerceToNumber

function to_number(num){
    let result=Number(num);
    if(result===NaN){
        return False
    }
    return result
}
res=to_number("")
console.log(res);
