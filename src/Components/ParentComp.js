import React, { Component, PureComponent } from 'react'
import PureComp from './PureComponents/PureComp'
import RegularComp from './RegularComp'

export class ParentComp extends Component {
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
                <RegularComp name={this.state.name} />
                <PureComp name={this.state.name} />
            </div>
        )
    }
}

export default ParentComp
