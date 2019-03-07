import React from 'react';
import TodoList from './TodoList';

import {Provider} from './context';

class TodoWrapper extends React.Component{

    state = {
        task:'',
        list:[]
    }
    render(){
        return (
            <Provider value={ {handleDelete: this.handleDelete} }>
                <div>
                    <input type="text" onChange={this.handleChange} value={this.state.task}></input>
                    <button onClick = { this.handleClick }>添加</button>
                </div>
                <TodoList list={this.state.list} fn={this.handleDelete}></TodoList>
            </Provider>
        )
    }

    handleChange = (e) =>{
        this.setState({
            task:e.target.value
        })
    }
    handleClick =()=> {
        this.setState({
            list:[...this.state.list,this.state.task],
            task:''
        })
    }

    handleDelete = (index) =>{
        const list = [...this.state.list];
        list.splice(index,1);
        this.setState({
            list
        })
    }
}

export default TodoWrapper;