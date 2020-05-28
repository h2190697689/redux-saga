import {bindActionCreators} from "redux"

const getNum =()=>({
    type: "num",
    list: [1,2,3]
})

const getName =()=>({
    type: "name",
    list: ["hejiamin"]
})

console.log(bindActionCreators({getNum,getName}))