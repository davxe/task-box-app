import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {startSetTask,startRemoveTask} from '../../actions/taskAction'

function Task(props)
{
    const handleRemove=(id)=>{
        const confirmRemove=window.confirm('are you sure')
        if(confirmRemove)
        {
            props.dispatch(startRemoveTask(id))
        }
    }
    if(props.task.length == 0)
    {
        props.dispatch(startSetTask())
    }
    console.log(props.task)
    return(
        <div>
            <h2>TaskBox</h2>
            <table border='0' style={{textAlign:"center",background:'rgb(219, 216, 35)'}}>
                <thead>
                    <tr style={{background:"blue"}}>
                        {/* <th><input type='checkbox'/></th> */}
                        <th>Title</th>
                        <th>CreatedOn</th>
                        <th>DueDate</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.task.map((ele,i)=>{
                            return (
                                <tr key={i}>
                                    {/* <td><input type='checkbox' checked={ele.completed}/></td> */}
                                    <td>{ele.title}</td>
                                    <td>{ele.createdAt}</td>
                                    <td>{ele.dueDate}</td>
                                    <td><button onClick={()=>handleRemove(ele._id)} style={{background:"red"}}>remove</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <Link to='/tasks/addTask'>Add Task</Link>
        </div>
    )
}
const mapStateToProps=(state)=>{
    return{
        task:state.task
    }
}

export default connect(mapStateToProps)(Task)