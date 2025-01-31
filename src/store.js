import { combineReducers, createStore } from "redux"

const initialState={
    balance:0,
    fullName:"vishnu",
    mobileNumber:6305317447,
    transactionNumber:0,
}


function accountReducer(state=initialState,action){
            console.log(action);
            
        switch(action.type){
             case "deposite":{
                return {...state,balance:state.balance+ +action.payload,transactionNumber:state.transactionNumber+1}
            }
            
            case "withdraw":{
                return {...state,balance:state.balance-action.payload,transactionNumber:state.transactionNumber+1}
            }
            case "nameUpdate":{
                return {...state,fullName:action.payload}
            }
           case "mobileNumberUpdate":{
                return {...state,mobileNumber:action.payload}
            }
            case "reset":{
                return initialState
            }
            default :{
                return state
            }
        }
}


function transactionReducer(state=[],action){
    switch(action.type){
        case 'addTransaction':{
            return [...state,{
                id:action.payload.id,
                amount:action.payload.amount,
                type:action.payload.type,
                date:action.payload.date,
            }]
        }
        default :{
            return state
        }
    }
}


let rootReducer=combineReducers({
    account:accountReducer,
    transaction:transactionReducer,
})

// console.log(rootReducer);


const store=createStore(rootReducer)
// store.dispatch({type:"diposite",payload:1000})
// console.log(store);
// console.log(store.getState());
// store.dispatch({type:"withdraw",payload:500})
// console.log(store.getState());
// store.dispatch({type:"mobileNumberUpdate",payload:657899})
// console.log(store.getState());


export default store







