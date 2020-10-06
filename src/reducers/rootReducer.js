const initialState={
    firstArray:[],
}

function rootReducer(state=initialState, action){
    switch(action.type){
        case "CHANGEARRAY":
            return {
                firstArray:action.value.firstArray
            }
        default:
            return state;
    }
}

export default rootReducer;