import React, { Component } from 'react'
import UserContext from './UserContext'
export default class ColFrag extends Component {
    static contextType =UserContext
    render() {
        return (
            <div>
                col frg Component
                {this.context.Id}
            
            </div>
        )
    }
}
