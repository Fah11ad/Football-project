import React, { Component } from 'react'
import EnglandTable from './EnglandTable'
import ItalyTable from './ItalyTable'
import SpainTable from './SpainTable'
import FranceTable from './FranceTable'
import GermanyTable from './GermanyTable'
import { Card, CardDeck, Col, Row, Button, Image } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import '../App.css'

export default class CustomTables extends Component {
    render() {
        return (
            <div>
                <h2>Tables</h2>
                {/* <Row> */}
                    {/* <Col lg={6} md={6} sm={12}> */}
                        <NavLink to="/EnglandTable">
                        <Button className="btn middle" variant="flat" size="xxl">
                            <Image src={require("../assets/premier-league-logo-preview.png")} style={{width:'150px', height:'150px'}}/>
                        </Button>
                        </NavLink>
                        <NavLink to="/ItalyTable">
                        <Button className="btn middle" variant="flat" size="xxl">
                            <Image src={require("../assets/Serie-A.png")} style={{width:'150px', height:'150px'}}/>
                        </Button>
                        </NavLink>
                        <NavLink to="/SpainTable">
                        <Button className="btn middle" variant="flat" size="xxl">
                            <Image src={require("../assets/La_Liga.png")} style={{width:'150px', height:'150px'}}/>
                        </Button>
                        </NavLink>
                        <NavLink to="/FranceTable">
                        <Button className="btn middle" variant="flat" size="xxl">
                            <Image src={require("../assets/france-ligue-1.png")} style={{width:'150px', height:'150px'}}/>
                        </Button>
                        </NavLink>
                        <NavLink to="/EnglandTable">
                        <Button className="btn middle" variant="flat" size="xxl">
                            <Image src={require("../assets/premier-league-logo-preview.png")} style={{width:'150px', height:'150px'}}/>
                        </Button>
                        </NavLink>
                        
                        
                    {/* </Col> */}
                    {/* <Col lg={6} md={6} sm={12}> */}

                    {/* </Col> */}
                {/* </Row> */}
            </div>
        )
    }
}
