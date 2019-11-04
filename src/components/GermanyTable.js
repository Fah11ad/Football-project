import React, { Component } from 'react'
import { Card, Container, Row, Col, Table } from 'react-bootstrap'


export default class ItalyTable extends Component {
    
    render() {
        
        return (
            <div>
                <Container>
                    <Card style={{ margin: '24px 24px 24px 24px',backgroundColor: '#030366', color: '#fff'}}>
                        <Card.Title  >
                            <h2 style={{paddingTop: '20px'}}>BUNDESLIGA</h2>
                            
                            </Card.Title>
                    </Card>
                    <Row style={{ margin: '24px 24px 24px 24px' }}>
                        <Col  >
                            <Table striped bordered hover>

                                <thead>
                                    <tr>
                                        <th className='align-middle'>NO</th>
                                        <th className='px-5 align-middle' >TEAM</th>
                                        <th className='align-middle'>PLAYED</th>
                                        <th className='align-middle'>WON</th>
                                        <th className='align-middle'>DRAW</th>
                                        <th className='align-middle'>LOST</th>
                                        <th className='align-middle'>GOALS FOR</th>
                                        <th className='align-middle'>GOALS AGAINST</th>
                                        <th className='align-middle'>GOALS DIFFERENCE</th>
                                        <th className='align-middle'>POINTS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.props.germanyTable == null ? [] : this.props.germanyTable.data.standings[0].table.map((val, i) => (
                                        <tr>
                                            <td className='align-middle'>{val.position}</td>
                                            <td className='px-5'><img src={val.team.crestUrl} style={{width: '50px', height: '50px'}} /><br/> {val.team.name}</td>
                                            <td className='align-middle'>{val.playedGames}</td>
                                            <td className='align-middle'>{val.won}</td>
                                            <td className='align-middle'>{val.draw}</td>
                                            <td className='align-middle'>{val.lost}</td>
                                            <td className='align-middle'>{val.goalsFor}</td>
                                            <td className='align-middle'>{val.goalsAgainst}</td>
                                            <td className='align-middle'>{val.goalDifference}</td>
                                            <td className='align-middle'>{val.points}</td>
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