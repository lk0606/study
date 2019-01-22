import React, { Component } from 'react'

class Home extends Component {
    /* super必须写
    *  props 用于父子组件传值
    */
    constructor(props) {
        super(props)

        // 数据
        this.state = {
            name: 'lk'
        }
    }
    render() {
        return (
            // 所有元素必须被根节点包含起来
            <div className={`container`}>
                Home
                <p>my name is {this.state.name}</p>
            </div>
        )
    }
}
export  default Home