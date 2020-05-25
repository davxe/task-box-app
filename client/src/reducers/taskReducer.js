const taskInitialState=[]
const taskReducer=(state=taskInitialState,action)=>{
    switch(action.type)
    {
        case 'ADD_TASK' : {
            return [...state, action.payload]
        }
        case 'SET_TASK': {
            return [...action.payload]
        }
        case 'REMOVE_TASK':{
            return state.filter(ele=>ele._id!=action.payload)
        }
        default:{
            return [...state]
        }
    }
}
export default taskReducer