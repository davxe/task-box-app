import React from 'react'
import {connect} from 'react-redux'
import {startLoginTask} from '../../actions/taskAction'
import DatePicker from 'react-datepicker'

class AddTask extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            title:'',
            description:"",
            completed:false,
            duedate:''
        }
    }
    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    // handleSelect=(date)=>{
    //     this.setState({duedate:date})
    // }
    handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            title:this.state.title,
            description:this.state.description,
        }
        console.log('add task',formData)
        const redirect=()=>{
            return this.props.history.push('/tasks')
        }
        this.props.dispatch(startLoginTask(formData,redirect))
        // this.props.dispatch(startRegisterUser(formData,this.props)) 
    }
    render()
    {
        return(
            <div>
                <h2>Add Task</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>title:
                        <input 
                            type='text'
                            name='title'
                            value={this.state.title}
                            onChange={this.handleChange}
                            placeholder='task title'
                        /><br/><br/>
                    </label>

                    <label>description:
                        <textarea 
                            type='text'
                            name='description'
                            value={this.state.description}
                            onChange={this.handleChange}
                            placeholder='task description'
                        /><br/><br/>
                    </label>
                    <label> Due Date:
                        <input
                            type='date'
                            value={this.state.duedate}
                            name='duedate'
                            onChange={this.handleChange}
                        />
                    </label><br/><br/>
                    
                    <input type='submit' value='submit'/>
                    

                </form>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return {
        task:state.task
    }
}
export default connect(mapStateToProps)(AddTask)