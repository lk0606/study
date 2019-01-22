import React from 'react'

class Test extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'test'
        }
    }
    render() {
        return (
            <div className={`container`}>
                <h2>componentName: {this.state.name}</h2>
                <ul>
                    <li>test1</li>
                    <li>test2</li>
                    <li>test3</li>
                </ul>
            </div>
        )
    }
}
export  default Test