const defaultState = {
    name: "hejiamin"
}

export default (state=defaultState,action)=>{
    switch(action.type){
        case "name":
            return {...state,name: action.list.join(",")}
        case "ok":
            return {...state}
        case "error":
            return {...state}
        default:
            return {...state}
    }
}