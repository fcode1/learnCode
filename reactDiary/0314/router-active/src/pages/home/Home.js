import React, { Component } from 'react';
import './style.css';
class Home extends Component {

  

  render () {
    return (
      <>
      <div className="home">
        <h4>
          发表话题：
        </h4>
        <form >
          <div className="form-box">
            <label htmlFor="author">作者姓名：</label>
            <input id="author"  required></input>
          </div>
          <div className="form-box">
            <label htmlFor="article">文章标题：</label>
            <input id="article"  required></input>
          </div>
          <button className="confirm-btn" >提交</button>
        </form>
      </div>
      {/* <ul>
        {
          this.state.list.map((item,index)=>(
            <li key={index}>{item}</li>
          ))
        }
      </ul> */}
      </>
    )
  }
}

export default Home;