export const getNum =()=>({
    type: "num",
    list: [1,2,3]
})

export const getName =(list)=>({
    type: "name",
    list
})