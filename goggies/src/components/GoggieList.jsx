import React, { Component } from 'react'
import Goggie from './Goggie';

export default class goggiesList extends Component {
    render() {
        return (
            <section className="list">
                {this.props.list.map(i=><Goggie name={i} key={i}/>)}
            </section>
        )
    }
}
