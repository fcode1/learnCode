import React from 'react';
import PropTypes from 'prop-types'; 

class Person extends React.Component {

    static defaultProps = {//默认属性写在静态方法内
        name:'jack'
    }

    static propTypes = {
        name: PropTypes.string,
        age: PropTypes.number,
        sex: PropTypes.oneOf(['男','女']),
        figure: PropTypes.objectOf(PropTypes.number),
        hobby: PropTypes.arrayOf(PropTypes.string),
        salary (props,propsName,componentName) {
            if(props[propsName] < 10000){
                return new Error (
                    `${componentName}组件传过来的${propsName}属性的值太小了，应该大于1万`
                );
            }
        }
    }

    render () {
        // 属性传过来是无法更改的，可以解构一下
        const { name, age, sex, figure, hobby, salary } = this.props//解构赋值
        return (
            <>
            <div>{name} 个人资料</div>
            <div>年龄：{age}</div>
            <div>性别：{sex}</div>
            <div>身高：{figure.height}</div>
            <div>体重：{figure.weight}</div>
            <div>兴趣：{hobby}</div>
            <div>薪资：{salary}</div>
          </>
        )
    }
}

export default Person;