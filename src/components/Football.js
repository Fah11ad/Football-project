import React, { Component } from 'react'
import Matches from './Matches'
import axios from 'axios'
import EnglandTable from './EnglandTable'
import ItalyTable from './ItalyTable'
import SpainTable from './SpainTable'
import FranceTable from './FranceTable'
import GermanyTable from './GermanyTable'

export default class Football extends Component {
    
    render() {

        return (
            <div>
                {/* <Matches response={this.state.response} /> */}
                {/* <EnglandTable englandTable={this.props.englandTable} /> */}
                {/* <ItalyTable italyTable={this.state.italyTable} />
                <SpainTable spainTable={this.state.spainTable} />
                <FranceTable franceTable={this.state.franceTable} />
                <GermanyTable germanyTable={this.state.germanyTable} /> */}
            </div>
        )
    }
}
