import React, {Component} from 'react'
import Common from './Common'

class Root extends Component {
    constructor() {
        super()
    }

    render() {
        const {children} = this.props

        return (
            <div>
                <Common>{children}</Common>
            </div>
        )
    }
}

export default Root
