import axios from 'axios'

export const setTask = (task) => {
    return { 
        type: 'SET_TASK', 
        payload: task
    }
}

export const startSetTask = () => {
    return (dispatch) => {
        axios.get('/tasks', {
            headers: {
                'authorization': localStorage.getItem('authToken')
            }
        })
            .then((response) => {
                const task = response.data 
                dispatch(setTask(task))
            })
    }
}

export const removeTask = (id) => {
    return { 
        type: 'REMOVE_TASK', payload: id
    }
}

export const startRemoveTask=(id)=>{
    return (dispatch)=>{
        axios.delete(`/tasks/${id}`, {
            headers: {
                'authorization' : localStorage.getItem('authToken')
            }
        })
        .then((response) => {
            const task = response.data 
            dispatch(removeTask(task._id))
        })
    }
}
export const addTask = (task) => {
    return {
        type: 'ADD_TASK', 
        payload: task 
    }
}

export const startLoginTask=(formData,redirect)=>{
    return (dispatch)=>{
        axios.post('/tasks',formData,{headers:{'authorization':localStorage.getItem('authToken')}})
        .then(response=>{
            console.log(response.data)
            if(response.data.hasOwnProperty('errors'))
            {
                alert(response.data.message)
            }
            else
            {
                alert('successfully added')
                const task = response.data
                dispatch(addTask(task))
                // props.history.push('/users/login')
                redirect()
            }
        })
        .catch(err=>{
            console.log(err)
        })
        // console.log('action generator',formData)
    }
}
