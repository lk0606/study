import React, { Component, useState, useEffect } from 'react'
function Example() {
    // 声明一个叫 "count" 的 state 变量
    const [count, setCount] = useState(0);
    useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked ${count} times`;
    });
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}

class Home extends Component {
    /* super必须写
    *  props 用于父子组件传值
    */
    constructor(props) {
        super(props)

        // 数据
        this.state = {
            name: 'lk',
            number: 1,
            isAdd: true,
        }
        this.clickNumber = this.clickNumber.bind(this)
    }
    clickNumber() {
        let num = this.state.number
        console.log(num, this.state.isAdd, 'number')
        if(num===1) {
            this.setState({
                number: num+1,
                isAdd: true,
            })
        } else if (num===3) {
            this.setState({
                number: num-1,
                isAdd: false,
            })
        } else {
            this.setState({
                number: this.state.isAdd ? num+1 : num-1,
            })
        }
    }

    componentDidMount() {
        console.log(this.clickNumber(), 'click')
        let arr = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
        const len = arr.length
        let runCount = 0
        let allCount = 0
        for(let i=0; i<len-1; i++) {
            for(let j=0; j<len-1-i; j++) {
                if(arr[j] > arr[j+1]) {
                    const temp = arr[j]
                    arr[j] = arr[j+1]
                    arr[j+1] = temp
                    runCount += 1
                }
                allCount += 1
            }
        }
        console.log(arr, 'arr')
        console.log(runCount, 'runCount')
        console.log(allCount, 'allCount')
        let arr2 = [9, 3, 4, 7, 5, 6, 8, 2, 1, 0]
        // let arr2 = [3, 6, 2, 7, 9, 5, 0, 1, 4, 8]
        const len2 = arr2.length
        let runCount2 = 0
        let allCount2 = 0
        let tag

        for(let i=0; i<len2-1; i++) {
            tag = true
            for(let j=0; j<len2-1-i; j++) {
                if(arr2[j] > arr2[j+1]) {
                    const temp = arr2[j]
                    arr2[j] = arr2[j+1]
                    arr2[j+1] = temp
                    runCount2 += 1
                    tag = false
                }
                allCount2 += 1
            }
            if(tag) {
               break
            }
        }
        console.log(arr2, 'arr2')
        console.log(runCount2, 'runCount2') // 32
        console.log(allCount2, 'allCount2') // 45
        console.log(this, 'this')
    }

    render() {
        return (
            // 所有元素必须被根节点包含起来
            <div className={`container`}>
                <span>Home</span>
                <p>my name is {this.state.name}</p>
                <p onClick={this.clickNumber}>点击：{this.state.number}</p>
                {this.props.children('Home')}
                <Example></Example>
            </div>
        )
    }
}
export  default Home
