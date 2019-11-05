import React, { Component } from 'react'
import EnglandTable from './EnglandTable'
import ItalyTable from './ItalyTable'
import SpainTable from './SpainTable'
import FranceTable from './FranceTable'
import GermanyTable from './GermanyTable'
import { Card, CardDeck, Col, Row, Button, Image } from 'react-bootstrap'
import '../App.css'

export default class CustomTables extends Component {
    render() {
        return (
            <div>
                <h2>Tables</h2>
                {/* <Row> */}
                    {/* <Col lg={6} md={6} sm={12}> */}
                        
                        <Button className="btn middle" variant="flat" size="xxl">
                            <Image src={require("../assets/premier-league-logo-preview.png")} style={{width:'150px', height:'150px'}}/>
                        </Button>
                        <Button className="btn middle" variant="flat" size="xxl">
                            <Image src={require("../assets/premier-league-logo-preview.png")} style={{width:'150px', height:'150px'}}/>
                        </Button>
                        <Button className="btn middle" variant="flat" size="xxl">
                            <Image src={require("../assets/premier-league-logo-preview.png")} style={{width:'150px', height:'150px'}}/>
                        </Button>
                        <Button className="btn middle" variant="flat" size="xxl">
                            <Image src={require("../assets/premier-league-logo-preview.png")} style={{width:'150px', height:'150px'}}/>
                        </Button>
                        <EnglandTable />
                        
                    {/* </Col> */}
                    {/* <Col lg={6} md={6} sm={12}> */}

                    {/* </Col> */}
                {/* </Row> */}
            </div>
        )
    }
}
