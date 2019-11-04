import React, { Component } from 'react'
import Matches from './Matches'
import axios from 'axios'
import EnglandTable from './EnglandTable'
import ItalyTable from './ItalyTable'
import SpainTable from './SpainTable'
import FranceTable from './FranceTable'
import GermanyTable from './GermanyTable'

export default class Football extends Component {
    state = {
        response: null,
        englandTable: null,
        italyTable: null,
        spainTable: null,
        franceTable: null,
        germanyTable: null
    }

    componentDidMount() {
        let obj = this
        axios({
            headers: { 'X-Auth-Token': '24cff506e20140d3aea18a56e74c7ec7' },
            url: 'https://api.football-data.org/v2/matches?api-key=24cff506e20140d3aea18a56e74c7ec7',
            dataType: 'json',
            type: 'GET',
        })
            .then(function (response) {
                obj.setState({ response })
            })
        axios({
            headers: { 'X-Auth-Token': '24cff506e20140d3aea18a56e74c7ec7' },
            url: 'http://api.football-data.org/v2/competitions/2021/standings?api-key=24cff506e20140d3aea18a56e74c7ec7',
            dataType: 'json',
            type: 'GET',
        })
            .then(function (englandTable) {
                obj.setState({ englandTable })
            })
        axios({
            headers: { 'X-Auth-Token': '24cff506e20140d3aea18a56e74c7ec7' },
            url: 'http://api.football-data.org/v2/competitions/2019/standings?api-key=24cff506e20140d3aea18a56e74c7ec7',
            dataType: 'json',
            type: 'GET',
        })
            .then(function (italyTable) {
                obj.setState({ italyTable })
            })
        axios({
            headers: { 'X-Auth-Token': '24cff506e20140d3aea18a56e74c7ec7' },
            url: 'http://api.football-data.org/v2/competitions/2014/standings?api-key=24cff506e20140d3aea18a56e74c7ec7',
            dataType: 'json',
            type: 'GET',
        })
            .then(function (spainTable) {
                obj.setState({ spainTable })
            })
        axios({
            headers: { 'X-Auth-Token': '24cff506e20140d3aea18a56e74c7ec7' },
            url: 'http://api.football-data.org/v2/competitions/2015/standings?api-key=24cff506e20140d3aea18a56e74c7ec7',
            dataType: 'json',
            type: 'GET',
        })
            .then(function (franceTable) {
                obj.setState({ franceTable })
            })
        axios({
            headers: { 'X-Auth-Token': '24cff506e20140d3aea18a56e74c7ec7' },
            url: 'http://api.football-data.org/v2/competitions/2002/standings?api-key=24cff506e20140d3aea18a56e74c7ec7',
            dataType: 'json',
            type: 'GET',
        })
            .then(function (germanyTable) {
                obj.setState({ germanyTable })
            })
    }
    render() {

        return (
            <div>
                <Matches response={this.state.response} />
                <EnglandTable englandTable={this.state.englandTable} />
                <ItalyTable italyTable={this.state.italyTable} />
                <SpainTable spainTable={this.state.spainTable} />
                <FranceTable franceTable={this.state.franceTable} />
                <GermanyTable germanyTable={this.state.germanyTable} />
            </div>
        )
    }
}
