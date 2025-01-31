export function deposite(amount){

    return {type:"deposite",payload:amount}

}

export function withdraw(amount){
    return {type:"withdraw",payload:amount}
}

export function nameUpdate(name){
    return {type:"nameUpdate",payload:name}
}

export function mobileUpdate(mobile){
    return {type:"mobileNumberUpdate",payload:mobile}
}

export function reset(){
    return {type:"reset"}
}