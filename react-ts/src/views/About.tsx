import * as React from 'react';
import 'src/App.css'

class About extends React.Component <{}, { inputVal: string }> {
    constructor(props: any) {
        super(props)
        // 数据
        this.state = {
            inputVal: ''
        }
    }
    public run = (e:any)=> {
        // const c = this.state.inputVal
        // console.log( c )
        // e.target.setAttribute('aid','custom')
        // alert(e.target.getAttribute('aid'))
    }
    public saveInputVal = (e:any)=> {
        this.setState({
                inputVal : e.target.value
        })
    }
    public render() {
        return (
            <div>
                <p className={ `App-title` }>
                    <button onClick={this.run}>点击</button>
                    <input type="text" onChange={ this.saveInputVal }/><input type="button" value="获取前面的值" onClick={this.run}/>
                </p>
            </div>
        )
    }
}

export default About