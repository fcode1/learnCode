import React from 'react';

class TodoList extends React.Component {

    state = {
        inpVal:'',
        list:[]
    }

    render () {
        return (
            <>
                <input type='text' value={this.state.inpVal} onChange={this.handleChange}></input>
                <button onClick={this.handleClick}>提交</button>

                <ul>
                    {
                        this.state.list.map((item,index) =>(
                            <li key={item}>
                                {item}
                                <button onClick={()=>{this.handleDelete(index)}}>删除</button>
                            </li>
                        ))
                    }
                </ul>
            </>
        )
    }


    handleChange = e => {
        this.setState({
            inpVal:e.target.value
        })
    }
    handleClick = () => {
        this.setState({
            list:[...this.state.list,this.state.inpVal],
            inpVal:''
        })
    }
    handleDelete = index => {
        const list = this.state.list
        list.splice(index,1)

        this.setState({
            list
        })
    }
}





























// class TodoList extends React.Component {
//     // constructor () {
//     //     super();
       
//     // }
//     state = {
//         inpVal:'',
//         list:[1,2,3],
//         count:0
//     }

//     render() {
//         return (
//             <>
//                 <div>
//                     {
//                         //加bind(this)，再绑定this，不然指向空
//                     }
//                     <input type="text" value={this.state.inpVal} onChange={this.handleChange} />
//                     <button onClick={this.handleClick.bind(this)}>添加</button>
//                 </div>
//                 <ul>
//                     {
//                         this.state.list.map((item,index)=>(
//                             <li key={item}>
//                              { item }
//                              {/* <button onClick={this.handleDelete.bind(this,index)}>X</button> */}
//                              {
//                                 //用匿名函数内部执行传参
//                              }
//                              <button onClick={()=> { this.handleDelete(index) }}>X</button>
//                              </li>
//                         ))
//                     }
//                 </ul>
//                 <div>
//                     <span>{ this.state.count }</span>
//                     <button onClick={ this.handleAdd }>添加</button>
//                 </div>
//             </>
//         )
//     }
//     handleChange = e => {//箭头函数不用bind绑定this
//         this.setState({//用setState设置
//             inpVal:e.target.value
//         })
//     }

//     handleClick(){
//         this.setState({
//             //原来的值+现在的值
//             list:[...this.state.list,this.state.inpVal],
//             inpVal:''
//         })
//     }

//     handleDelete = index => {
//         const list = this.state.list;
//         list.splice(index,1);

//         this.setState({
//             list
//         })
//     }

//     handleAdd = () =>{
//         this.setState((prevState)=>{//累加参数传函数
//             return {
//                 count:prevState.count+1
//             }
//         })
//     }
// }

export default TodoList;