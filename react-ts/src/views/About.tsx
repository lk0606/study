import * as React from 'react';
import 'src/App.css'
// import { ReactDOM } from 'react-dom'
class About extends React.Component <{}, { inputVal: string }> {
    constructor(props: any) {
        super(props)
        // 数据
        this.state = {
            inputVal: '11'
        }
        // this.ref = React.createRef()
    }
    public run = (e:any)=> {
        // const c = this.state.inputVal
        // console.log( this.state.inputVal )
        // e.target.setAttribute('aid','custom')
        // alert(e.target.getAttribute('aid'))
    }
    public saveInputVal = (e:any)=> {
        this.setState({
                inputVal : e.target.value
        })
    }

    public getRef = ()=> {
        let inputVal = this.refs['inputVal'] as HTMLInputElement;
        console.log(inputVal.value,'inputVal')
    }
    public static onKeyUp(e:any) {
        console.log(e.keyCode,'keyCode')
        // if(e.keyCode === 65){
        //     alert('你点了a')
        // }
    }
    public render() {
        return (
            <div>
                <p className={ `App-title` }>
                    <button onClick={this.getRef} >ref</button>
                    <input type="text" onChange={ this.saveInputVal }   ref={`inputVal`} value={this.state.inputVal} onKeyUp={About.onKeyUp}/>
                    <input type="button" value="获取前面的值" onClick={ this.run }/>
                </p>
            </div>
        )
    }
}

export default About