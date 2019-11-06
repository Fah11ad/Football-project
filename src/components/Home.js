import React, { Component } from 'react'
import { Card, Button, Image } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import '../App.css'

export default class CustomTables extends Component {
    render() {
        return (
            <div>
                <Card style={{ margin: '24px 24px 24px 24px', backgroundColor: '#030366', color: '#fff', transform: 'skew(-20deg)', opacity: .99, marginBottom: '1px' }}>
                    <Card.Title  >
                        <h2 style={{ paddingTop: '20px' }}>TOP FIVE LEAGUE TABLES</h2>
                    </Card.Title>
                </Card>
               
                <NavLink to="/EnglandTable">
                    <Button className="btn middle" variant="flat" size="xxl">
                        <Image src={require("../assets/premier-league-logo-preview.png")} style={{ width: '150px', height: '150px' }} />
                    </Button>
                </NavLink>
                <NavLink to="/ItalyTable">
                    <Button className="btn middle" variant="flat" size="xxl">
                        <Image src={require("../assets/Serie_A_logo.png")} style={{ width: '150px', height: '150px' }} />
                    </Button>
                </NavLink>
                <NavLink to="/SpainTable">
                    <Button className="btn middle" variant="flat" size="xxl">
                        <Image src={require("../assets/La_Liga.png")} style={{ width: '150px', height: '150px' }} />
                    </Button>
                </NavLink>
                <NavLink to="/FranceTable">
                    <Button className="btn middle" variant="flat" size="xxl">
                        <Image src={require("../assets/france-ligue-1.png")} style={{ width: '150px', height: '150px' }} />
                    </Button>
                </NavLink>
                <NavLink to="/GermanyTable">
                    <Button className="btn middle" variant="flat" size="xxl">
                        <Image src={require("../assets/Bundesliga_logo.png")} style={{ width: '150px', height: '150px' }} />
                    </Button>
                </NavLink>
                <br />
                <Card style={{ margin: '24px 24px 24px 24px', backgroundColor: '#030366', color: '#fff', transform: 'skew(-20deg)', opacity: .99, marginBottom: '1px'}}>
                    <Card.Title  >
                        <h2 style={{ paddingTop: '20px' }}>TODAY'S MATCHES</h2>
                    </Card.Title>
                </Card>
                <br />
                <NavLink to="/Matches">
                    <Button className="btn middle" variant="flat" size="xxl" style={{ width: '500px', height: '150px' }}>
                        <h1><span className="font-weight-bold">SCHEDULED</span><br />MATCHES</h1>
                        {/* <Image src={require("../assets/premier-league-logo-preview.png")} style={{width:'250px', height:'250px'}}/> */}
                    </Button>
                </NavLink>
                <NavLink to="/EndMatches">
                    <Button className="btn middle" variant="flat" size="xxl" style={{ width: '500px', height: '150px' }}>
                        <h1><span className="font-weight-bold">RESULTS</span><br /> MATCHES</h1>
                        {/* <Image src={require("../assets/Serie-A.png")} style={{width:'250px', height:'250px'}}/> */}
                    </Button>
                </NavLink>



            </div>
        )
    }
}
