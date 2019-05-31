import React,{Component} from 'react'

export default class Film extends Component {

    render(){
        return (
            <li>
                Data in: {this.props.filmURL}
            </li>
        )
    }
}