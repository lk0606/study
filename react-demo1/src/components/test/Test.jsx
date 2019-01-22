import React from 'react'
import  './test.scss'
// import pic from '../../assets/image/earth-demo.png'
class Test extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'test',
            list1: [1,2,3,4],
            // list2: [<h2>1</h2>,<h2>2</h2>,<h2>3</h2>,<h2>4</h2>],
            list3: [
                { t:'t1' },
                { t:'t2' },
                { t:'t3' },
            ]
        }
        this.style = {
            backgroundColor: 'blue'
        }
    }
    render() {
        var listResult = this.state.list1.map(function (v,k) {
            return <b key={k}>{v}</b>
        })
        
        return (
            <div className={`container`}>
                <h2>componentName: {this.state.name}</h2>
                请输入:<input type="text"/>
                <ul className={`uls`}>
                    <li style={{ backgroundColor: `yellow` }}>test1:</li>
                    <li style={this.style}>test2</li>
                    <li>test3</li>
                    {this.state.list2}
                    <hr/>
                    {listResult}
                    <hr/>
                    {
                        this.state.list3.map(function (v,k) {
                            return <b key={k}>{v.t},</b>
                        })
                    }
                </ul>
            </div>
        )
    }
}
export  default Test