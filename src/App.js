import React, { Component } from 'react'
import { Route, BrowserRouter, Switch, Link } from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import News from './components/News';
import CustomTables from './components/CustomTables'
import Competions from './components/Competions'
import CustomNavbar from './components/CustomNavbar'
import Football from './components/Football'
import EnglandTable from './components/EnglandTable';
import ItalyTable from './components/ItalyTable';
import SpainTable from './components/SpainTable';
import FranceTable from './components/FranceTable';
import GermanyTable from './components/GermanyTable';
import axios from 'axios'


class App extends Component {
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

  render(){

  
  return (
    <BrowserRouter>
    <div className="App">
    <CustomNavbar />
      <Switch>
      <Route exact path="/" render={(props) => <Home {...props} response={this.state.response} />} />
      <Route exact path="/EnglandTable" render={(props) => <EnglandTable {...props} englandTable={this.state.englandTable} />} />
      <Route exact path="/ItalyTable" render={(props) => <ItalyTable {...props} italyTable={this.state.italyTable} />} />
      <Route exact path="/SpainTable" render={(props) => <SpainTable {...props} spainTable={this.state.spainTable} />} />
      <Route exact path="/FranceTable" render={(props) => <FranceTable {...props} franceTable={this.state.franceTable} />} />
      <Route exact path="/GermanyTable" render={(props) => <GermanyTable {...props} germanyTable={this.state.germanyTable} />} />
      
      
      <Route path="/news" component={News} />
      <Route path="/CustomTables" component= {CustomTables}/>
      <Route path="/Competions" component= {Competions}/>
      <Route path="/football" component= {Football}/>
      
      </Switch>   
    </div>
    </BrowserRouter>
  )
  }
}

export default App;
