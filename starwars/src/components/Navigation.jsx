import React, { Component } from 'react'

export default class Navigation extends Component {
    render() {
        let classLeft='',classRight=''
        if(this.props.init>1)
            classLeft='available'
        if(this.props.init%2===1)
            classRight='available'
        return (
            <nav>
                <section
                    onClick={this.props.prev}
                    className={classLeft}
                >
                    {this.props.init>1 && "Previous"}
                </section>
                <section
                    onClick={this.props.next}
                    className={classRight}
                >
                    {
                        this.props.init%2===1 && 
                        "Next"
                    }
                </section>
            </nav>
        )
    }
}
