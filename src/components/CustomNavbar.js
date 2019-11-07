import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown, Image } from 'react-bootstrap'


export default class CustomNavbar extends Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{ bavbarHeight: '10px' }} >
                    <Navbar.Brand href="/"><h1 className="font-weight-bold"><span style={{ color: 'white' }}>football news</span></h1></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav >
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/Matches">Today's Matches</Nav.Link>
                            <Nav.Link href="/EndMatches">Results</Nav.Link>
                            <NavDropdown title="Top 5 Leagues" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/EnglandTable">
                                <Image src={require("../assets/england.svg")} style={{ width: '25px', height: '25px' }} />{' '} Premier League</NavDropdown.Item>   
                                <NavDropdown.Item href="/ItalyTable">
                                <Image src={require("../assets/italy.svg")} style={{ width: '25px', height: '25px' }} />{' '} Serie A League</NavDropdown.Item>
                                <NavDropdown.Item href="/SpainTable">
                                <Image src={require("../assets/spain.svg")} style={{ width: '25px', height: '25px' }} />{' '} La Liga</NavDropdown.Item>
                                <NavDropdown.Item href="/FranceTable">
                                <Image src={require("../assets/france.svg")} style={{ width: '25px', height: '25px' }} />{' '}Ligue 1</NavDropdown.Item>
                                <NavDropdown.Item href="/GermanyTable">
                                <Image src={require("../assets/germany.svg")} style={{ width: '25px', height: '25px' }} />{' '} Bundesliga</NavDropdown.Item>
                            </NavDropdown>

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}
