import React, { Component } from 'react'
import { Card, Container, Row, Col, Table } from 'react-bootstrap'
import axios from 'axios'


export default class EndMatches extends Component {

    render() {
        let today = new Date()
        let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()

        let objStatus = this.props.response == null ? [] : this.props.response.data.matches.map((val, i) => {
            let status = this.props.response.data.matches[i].status
            if (status == "FINISHED") {
              return(  <tr>
                    <td>{val.competition.name}</td>
                    <td>{val.homeTeam.name}</td>
                    <td className='font-weight-bold'>{val.score.fullTime.homeTeam}  -  {val.score.fullTime.awayTeam}</td> 
                    <td>{val.awayTeam.name}</td>
                </tr>
                )
            }
        })
        return (
            <div>
                <Container>
                    <Card style={{ margin: '24px 24px 24px 24px',backgroundColor: '#030366', color: '#fff', transform: 'skew(-20deg)', opacity: .99}}>
                        <Card.Title  >
                            <h2 style={{ paddingTop: '20px' }}>TODAY'S MATCHES RESULTS</h2>
                            <h3>{date}</h3>
                        </Card.Title>
                    </Card>
                    <Row style={{ margin: '24px 24px 24px 24px' }}>
                        <Col  >
                            <Table striped bordered hover variant="light" style= {{opacity: .99}}>

                                <thead>
                                    <tr>
                                        <th>COMPETITION</th>
                                        <th>HOME TEAM</th>
                                        <th>RESULT</th>
                                        <th>AWAY TEAM</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {objStatus}
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}