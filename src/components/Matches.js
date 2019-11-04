import React, { Component } from 'react'
import { Card, Container, Row, Col, Table } from 'react-bootstrap'
import axios from 'axios'


export default class Matches extends Component {
    
    render() {
        let today = new Date()
        let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()

        return (
            <div>
                <Container>
                    <Card style={{ margin: '24px 24px 24px 24px',backgroundColor: '#030366', color: '#fff'}}>
                        <Card.Title  >
                            <h2 style={{paddingTop: '20px'}}>TODAY'S MATCHES</h2>
                            <h3>{date}</h3>
                            </Card.Title>
                    </Card>
                    <Row style={{ margin: '24px 24px 24px 24px' }}>
                        <Col  >
                            <Table striped bordered hover>

                                <thead>
                                    <tr>
                                        <th>DATE / Time</th>
                                        <th>COMPETITION</th>
                                        <th>AWAY TEAM</th>
                                        <th>HOME TEAM</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.props.response == null ? [] : this.props.response.data.matches.map((val, i) => (
                                        <tr>
                                            <td>{val.utcDate}</td>
                                            <td>{val.competition.name}</td>
                                            <td>{val.awayTeam.name}</td>
                                            <td>{val.homeTeam.name}</td>
                                        </tr>
                                    )
                                    )}
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}