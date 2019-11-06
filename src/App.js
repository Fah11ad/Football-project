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
import Matches from './components/Matches';
import EndMatches from './components/EndMatches';


class App extends Component {
  state = {
    response: null,
    
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
}
  render(){
  return (
    <BrowserRouter>
    <div className="App">
    <CustomNavbar />
      <Switch>
      <Route exact path="/" render={(props) => <Home {...props} response={this.state.response} />} />
      {/* <Route exact path="/EnglandTable" render={(props) => <EnglandTable {...props} englandTable={this.state.englandTable} />} />
      <Route exact path="/ItalyTable" render={(props) => <ItalyTable {...props} italyTable={this.state.italyTable} />} />
      <Route exact path="/SpainTable" render={(props) => <SpainTable {...props} spainTable={this.state.spainTable} />} />
      <Route exact path="/FranceTable" render={(props) => <FranceTable {...props} franceTable={this.state.franceTable} />} />
      <Route exact path="/GermanyTable" render={(props) => <GermanyTable {...props} germanyTable={this.state.germanyTable} />} /> */}
      <Route exact path="/Matches" render={(props) => <Matches {...props} response={this.state.response} />} />
      <Route exact path="/EndMatches" render={(props) => <EndMatches {...props} response={this.state.response} />} />
      
      
      <Route path="/news" component={News} />
      <Route path="/CustomTables" component= {CustomTables}/>
      <Route path="/Competions" component= {Competions}/>
      <Route path="/football" component= {Football}/>
      <Route path="/EnglandTable" component= {EnglandTable}/>
      <Route path="/ItalyTable" component= {ItalyTable}/>
      <Route path="/SpainTable" component= {SpainTable}/>
      <Route path="/FranceTable" component= {FranceTable}/>
      <Route path="/GermanyTable" component= {GermanyTable}/>
   
      
      </Switch>   
    </div>
    </BrowserRouter>
  )
  }
}

export default App;
