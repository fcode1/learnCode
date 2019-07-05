import React from 'react';

class ChildLifeCycle extends React.Component {
  render (){
    console.log('4.(子组件)--开始更新页面')
    
    return (
      <div>子组件</div>
    )
  }


  componentWillReceiveProps () {
    console.log('1.(子组件)--willReceive')
  }

  shouldComponentUpdate () {
    console.log('2.(子组件)--父组件重新render，props改变')
    return true;
  }

  componentWillUpdate() {
    console.log('3.(子组件)--组件将要更新了')
  }

  componentDidUpdate () {//
    console.log('5.(子组件)--组件已经更新完毕')
  }

  componentWillUnmount () {
    console.log('(子组件)--WillUnmount-组件被卸载')
  }
}



export default ChildLifeCycle;