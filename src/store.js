import { createStore } from "redux"

const initialState={
    balance:0,
    fullName:"vishnu",
    mobileNumber:6305317447,
    transactionNumber:0,
}


function accountReducer(state=initialState,action){
            console.log(action);
            
        switch(action.type){
             case "diposite":{
                return {...state,balance:state.balance+ +action.payload,transactionNumber:state.transactionNumber+1}
            }
        
            case "withdraw":{
                return {...state,balance:state.balance-action.payload,transactionNumber:state.transactionNumber+1}
            }
           case "mobileNumberUpdate":{
                return {...state,mobileNumber:action.payload}
            }
            default :{
                return state
            }
        }
}

const store=createStore(accountReducer)
// store.dispatch({type:"diposite",payload:1000})
// console.log(store);
// console.log(store.getState());
// store.dispatch({type:"withdraw",payload:500})
// console.log(store.getState());
// store.dispatch({type:"mobileNumberUpdate",payload:657899})
// console.log(store.getState());


export default store







