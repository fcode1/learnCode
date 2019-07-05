import React from 'react';
import { Route } from 'react-router-dom';

//component
//render
//children

const MenuLink = ({to, ...props})=>{//props是Nav中涉及到的所有参数，此写法是单独将to拿出来使用
  console.log(props)
  return (//将props传入Route中，拿到exact属性
    <Route path={to} {...props} children={(p)=>{//只有route组件才可以使用其下三个属性match history location,故用其包裹一下
      // console.log(p.match)
      return (
        <span onClick={()=>{p.history.push(to)}}
              className={p.match ? 'active' : ''}
        >
          {props.children}
        </span>
      )
    }}>
    </Route>
  )
}

export default MenuLink;