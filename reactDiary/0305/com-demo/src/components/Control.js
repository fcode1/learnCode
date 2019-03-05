import React from 'react';

class Control extends React.Component {

    state = {
        taskA:'',
        taskB:'',
        list:[]
    }

    render () {
        return (
            <>
                <div>
                    taskA:
                    <input type="text" name="taskA" onChange={this.handleChange} value={this.state.taskA} />
                    <button onClick = { this.handleClick } name="taskA">添加A任务</button>
                </div>
                <div>
                    taskB:
                    <input type="text" name="taskB" onChange={this.handleChange} value={this.state.taskB} />
                    <button onClick = { this.handleClick } name="taskB">添加B任务</button>
                </div>

                <ul>
                    {
                        this.state.list.map((item,index)=>(
                            <li key={ item + index }>{ item }</li>
                        ))
                    }
                </ul>
            </>
        )
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.name]:e.target.value//通过name来确定触发的输入框
        })
    }
    handleClick = (e) =>{
        const type = e.target.name;//通过name来确定点击的按钮
        let task = this.state[type];//取出更改的对象

        if(type === 'taskA'){
            task = `任务A：${task}`
        }else if (type === 'taskB'){
            task = `任务B：${task}`
        }
        this.setState({
            list:[...this.state.list,task],
            [type]:''
        })
    }
}
export default Control