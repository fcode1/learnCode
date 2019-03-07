### .组件交互

父组件传递给子组件->list={this.state.list} 

孙组件想要操作父组件内容，需要父组件先定义操作方法，再传给子组件，子组件接收，再传给孙组件，孙组件接收才能再操作

- 1. 连续传递非常麻烦，在react16版本之后，新增Context  API，方便两个组件之间相互传递

  需要创建context.js文件

  ```javascript
  import React from 'react'
  
  let {Provider,Consumer} = React.createContext()
  
  export {
      Provider,
      Consumer
  }
  ```

  - 在需要使用的父组件中引入：import {Provider} from './context'; 

  然后在用到的地方最外层包裹一下，并且传一个value<Provider value={ {handleDelete: this.handleDelete} }>  ..........</Provider> 

  2.子组件在使用时也需要引用一下  ：import { Consumer } from './context' 

  包裹一下：里边写一个函数，参数为父元素的方法对象，

  ```javascript
   <Consumer>
       {
           ({handleDelete})=>
               <li>
                   {task}
              <button onClick={ () => { handleDelete(index) }}>X</button>
              </li>
  	}
   </Consumer>
  ```

  