import React, { PureComponent } from 'react'
import MemoComponent from './MemoComponent'

export class ParentComp extends PureComponent {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Mrinal'
        }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({ name: 'Mrinal'})
        }, 2000)
    }
    
    render() {
        console.log('Parent comp render')
        return (
            <div>
                Parent Component
                <MemoComponent name={this.state.name} />
                {/* <RegularComp name={this.state.name} /> */}
                {/* <PureComp name={this.state.name} /> */}
            </div>
        )
    }
}

export default ParentComp
