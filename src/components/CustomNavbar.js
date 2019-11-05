import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'

export default class CustomNavbar extends Component {
    render() {
        return (
            <div>
               <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{bavbarHeight: '10px'}} >
                    <Navbar.Brand href="/"><h1 className="font-weight-bold"><span style={{color: 'white'}}>european football news</span></h1></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/CustomTables">Tables</Nav.Link>
                            <Nav.Link href="/competions">Competions</Nav.Link>
                            <Nav.Link href="/matches">Matches</Nav.Link>
                            <Nav.Link href="/football">Football</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar> 
            </div>
        )
    }
}
