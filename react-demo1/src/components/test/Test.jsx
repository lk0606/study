import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Home from './../Home'
import  './test.scss'
// import pic from '../../assets/image/earth-demo.png'
export default class Test extends React.Component {
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
            ],
            say: 'before change say',
            style:{
                backgroundColor: 'blue'
            }
        }
    }
    log(str) {
        return console.log(str)
    }
    run = (getSay)=> {
        console.log(getSay)
        // this.state.say = getSay
    }
    changeSay = (sendToSay)=> {
        console.log(sendToSay)
        this.setState({
            say: sendToSay
        })
    }
    render() {
        var listResult = this.state.list1.map(function (v,k) {
            return <b key={k}>{v}</b>
        })
        return (
            <Router>
            <div className={`container`}>
                <h2>componentName: {this.state.name}</h2>
                请输入:<input type="text"/>
                <ul className={`uls`}>
                    <li style={{ backgroundColor: `yellow` }}>
                        <Link to={`/home`}>toHome</Link>
                    </li>
                    <li style={this.state.style}>test2</li>
                    <li>test3</li>
                    {this.state.say}
                    <hr/>
                    {listResult}
                    <hr/>
                    {
                        this.state.list3.map(function (v,k) {
                            return <b key={k}>{v.t},</b>
                        })
                    }
                    <hr/>
                    <button onClick={this.run}>get say</button>
                    <br/>
                    <button onClick={this.changeSay.bind(this,'我是changeSay传过来的值')}>change say</button>
                </ul>

                <Route path={`/Home`} component={Home}></Route>
            </div>

            </Router>
        )
    }
}
