import * as React from 'react';
import '../App.css'
class User extends React.Component< {} > {
    constructor(props: any) {
        super(props)
        // 数据
        this.state = {}
    }
    // getAboutVal = () => {
    //     console.log(this.refs)
    // }
    public render() {
        return (
            <div className={`App-title`}>
                {/*<button onClick={this.getAboutVal}>*/}
                    {/*获取about input值*/}
                {/*</button>*/}
            </div>
        )
    }
}

export default User