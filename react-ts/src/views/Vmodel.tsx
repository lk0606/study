import * as React from 'react';

class Vmodel extends React.Component< {}, { inputVal:string } > {
    constructor(props: any) {
        super(props)
        // 数据
        this.state = {
            inputVal: ''
        }
    }
    public getVal = (e:any)=> {
        this.setState({
            inputVal: e.target.value
        })
        console.log(e.target.value)
    }
    public render() {
        return (
            <div>
                <h2>双向数据绑定</h2>
                <input type="text" onChange={ this.getVal } value={this.state.inputVal}/>
                <p>{this.state.inputVal}</p>
            </div>
        )
    }
}

export default Vmodel