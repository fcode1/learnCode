import React from 'react';
import { Consumer } from './context'
class TodoItem extends React.Component{
    render(){
        const {task,index} = this.props;
        return (
            <Consumer>
                {
                    ({handleDelete})=>
                        <li>
                            {task}
                            <button onClick={ () => { handleDelete(index) }}>X</button>
                        </li>
                }
                {/* <li>
                    {task}
                    <button onClick={ () => { this.handleDelete(index) }}>X</button>
                </li> */}
            </Consumer>
        )
    }

    // handleDelete = (index) =>{
    //     this.props.deleteTask(index)
    // }
}

export default TodoItem;