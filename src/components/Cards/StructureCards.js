import React, { Component } from 'react'

// Bootsrap components
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

// Custom Containers
import FilmsCard from './FilmsCard'
import PeopleCard from './PeopleCard'

import './CardStyles.scss'

export default class ApiCall extends Component {

    render() {
        const { ApiResults } = this.props;

        let peopleData = null;
        let filmData = null;

        // return formated films
        const filmResults = () => {
            filmData = ApiResults.films.map((results) => {
                return (
                    <Col sm="auto" key={results.episode_id}>
                        <FilmsCard results={results} />
                    </Col>
                )
            });
        }

        // return formated people
        const peopleResults = () => {
            peopleData = ApiResults.people.map((results) => {
                return (
                    <Col sm="auto" key={results.mass}>
                        <PeopleCard results={results} />
                    </Col>
                )
            });
        }

        if (!((ApiResults.films).length === 0)) {
            if (!((ApiResults.people).length === 0)) {
                // Both people and films
                filmResults()
                peopleResults()
            } else {
                // Only films
                filmResults();
            }
        } else if (!((ApiResults.people.length) === 0)) {
            // Only people
            peopleResults();
        }

        return (
            <Container>
                <Card>
                    <Card.Header as="h3" className="p-3 mb-2 bg-success text-white">Found Data</Card.Header>
                    <Card.Body>
                        {peopleData ?
                            <React.Fragment>
                                <Card.Title as="h4" className="text-primary">People</Card.Title>
                                <Card.Text>
                                    <div className="row">
                                        {peopleData}
                                    </div>
                                </Card.Text>
                            </React.Fragment>
                            : <React.Fragment />}

                        {filmData ?
                            <React.Fragment>
                                <Card.Title as="h4" className="text-primary">Films</Card.Title>
                                <Card.Text>
                                    <div className="row">
                                        {filmData}
                                    </div>
                                </Card.Text>
                            </React.Fragment>
                            : <React.Fragment />}

                    </Card.Body>
                </Card>
            </Container>
        )
    }
};
