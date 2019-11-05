import React, { Component } from 'react'
import { Card, Container, Row, Col, Table } from 'react-bootstrap'


export default class ItalyTable extends Component {
    
    render() {
        
        return (
            <div>
                <Container>
                    <Card style={{ margin: '24px 24px 24px 24px',backgroundColor: '#030366', color: '#fff', transform: 'skew(-20deg)', opacity: .99}}>
                        <Card.Title  >
                            <h2 style={{paddingTop: '20px'}}>LIGUE 1</h2>
                            
                            </Card.Title>
                    </Card>
                    <Row style={{ margin: '24px 24px 24px 24px' }}>
                        <Col  >
                            <Table striped bordered hover variant="light" style= {{opacity: .99}}>

                                <thead>
                                    <tr>
                                        <th>NO</th>
                                        <th className='px-5' >TEAM</th>
                                        <th>PLAYED</th>
                                        <th>WON</th>
                                        <th>DRAW</th>
                                        <th>LOST</th>
                                        <th>GOALS FOR</th>
                                        <th>GOALS AGAINST</th>
                                        <th>GOALS DIFFERENCE</th>
                                        <th>POINTS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.props.franceTable == null ? [] : this.props.franceTable.data.standings[0].table.map((val, i) => (
                                        <tr>
                                            <td>{val.position}</td>
                                            <td className='px-5'><img src={val.team.crestUrl} style={{width: '50px', height: '50px'}} /><br/> {val.team.name}</td>
                                            <td>{val.playedGames}</td>
                                            <td>{val.won}</td>
                                            <td>{val.draw}</td>
                                            <td>{val.lost}</td>
                                            <td>{val.goalsFor}</td>
                                            <td>{val.goalsAgainst}</td>
                                            <td>{val.goalDifference}</td>
                                            <td>{val.points}</td>
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