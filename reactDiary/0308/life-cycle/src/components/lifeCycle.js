import React from 'react';
import ChildLifeCycle from './ChildLifeCycle'

//16.3版本之后移除了componentWillMount、componentWillReceiveProps、componentWillUpdate
class LifeCycle extends React.Component{

    static defaultProps = {}
    static propTypes = {}

    constructor () {//constructor中的内容首先加载
        console.log('1.constructor--constructor中的内容首先加载');
        super();
        this.state = {
            count:0
        }
    }

    componentWillMount () {//组件将要被挂载
        console.log('2.willMount--组件将要被挂载');
    }

    shouldComponentUpdate (nextProps,nextState) {//组件运行，state更改之后——>组件要不要更新？
        //可以用来检测更新的数据与上次数据是否相同，相同则没必要更新,节省性能
        
        console.log('5.shouldUpdate--组件运行，state更改之后——>组件要不要更新？')

        console.log(nextState.count === this.state.count);
        return !(nextState.count === this.state.count)
    }

    componentWillUpdate () {//组件将要更新了
        console.log('6.willUpdate--组件将要更新了')
    }

    componentDidUpdate () {//组件已经更新完毕
        console.log('7.didUpdate--组件已经更新完毕')
    }

    render(){//开始渲染页面
        console.log('3.render--开始渲染页面');
        return(
            <>
              <div>
                  count:{this.state.count}
                  <button onClick={this.handleClick}>+</button>
                  {
                      this.state.count ===0
                        ?<ChildLifeCycle n= {this.state.count}></ChildLifeCycle>
                        :''
                  }
                  
              </div>
            </>
        )
    }

    handleClick = () =>{
        this.setState({
            count:this.state.count + 1
            // count:this.state.count + 0 相加的数据相同，不会做更新
        })
    }


    componentDidMount () {//组件已经被挂载到页面
        //要发送ajax请求最好在这里边 
        console.log('4.didMount--组件已经被挂载到页面');
    }
}

export default LifeCycle;