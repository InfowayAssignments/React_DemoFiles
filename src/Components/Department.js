import React, { Component } from 'react'

export default class Department extends Component {
    render() {
        return (
            <div>
                Department Component<br/>
                ID-{this.props.Id}
                <br/>
                Name-{this.props.Name}
            </div>
        )
    }
}
