import React from 'react';

class LifeCycle extends React.Component{

    static defaultProps = {}
    static propTypes = {}

    constructor () {
        console.log('1.constructor');
        super();
        this.state = {
            count:0
        }
    }

    componentWillMount () {
        console.log('2.willMount');
    }

    shouldComponentUpdate () {
        console.log('5.shouldUpdate')
        return true
    }

    componentWillUpdate () {
        console.log('6.willUpdate')
    }

    componentDidUpdate () {
        console.log('7.didUpdate')
    }

    render(){
        console.log('3.render');
        return(
            <>
              <div>
                  count:{this.state.count}
                  <button onClick={this.handleClick}>+</button>
              </div>
            </>
        )
    }

    handleClick = () =>{
        this.setState({
            count:this.state.count + 1
        })
    }



    componentDidMount () {
        //发送ajax请求最好在这里边
        console.log('4.didMount');
    }
}

export default LifeCycle;