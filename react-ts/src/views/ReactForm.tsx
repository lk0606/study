import * as React from 'react';

class ReactForm extends React.Component < {}, { state:any }> {
    constructor(props: any) {
        super(props)
        // 数据
        this.state = {
            msg: 'react表单'
        }
    }

    public render() {
        return (
            <div>
                <h2>{this.state.msg}</h2>
            </div>
        )
    }
}

export default ReactForm