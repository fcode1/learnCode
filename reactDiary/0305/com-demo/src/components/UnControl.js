
import React from 'react';

class UnControl extends React.Component {

    state = {
        list:[]
    }

    render () {
        return (
            <>
                <div>
                    taskA:
                    {
                        //非受控组件 ->ref
                    }
                    <input type="text" ref={ (dom) => {this.taskA = dom} } />
                    <button onClick = { this.handleClick } name="taskA">添加A任务</button>
                </div>
                <div>
                    taskB:
                    <input type="text" ref={ (dom) => {this.taskB = dom} }/>
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


    handleClick = (e) =>{
        const type = e.target.name;//通过name来确定点击的按钮
        let task = this[type].value;

        if(type === 'taskA'){
            task = `任务A：${task}`
        }else if (type === 'taskB'){
            task = `任务B：${task}`
        }

        this[type].value=''

        this.setState({
            list:[...this.state.list,task]
        })
    }
}
export default UnControl