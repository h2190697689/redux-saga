const defaultState = {
    name: "hejiamin"
}

export default (state=defaultState,action)=>{
    switch(action.type){
        case "name":
            return {...state,name: action.list.join(",")}
        default:
            return {...state}
    }
}