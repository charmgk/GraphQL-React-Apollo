import React, { Component } from 'react'

// Bootsrap components
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'

// Custom Containers
import Loader from '../Loader/Loader'
import Card from '../Cards/FilmsCard'

import './styles.scss'

class ApiCall extends Component {

    render() {
        const { ApiResults } = this.props;
        let AllApiResultsData = '';

        AllApiResultsData = ApiResults.results.map((results) => {
            return (
                <Col sm="auto" key={results.episode_id}>
                    <Card results={results} />
                </Col>
            )
        })



        return (
            <Container>
                <div className="row">
                    {AllApiResultsData}
                </div>
            </Container>
        )
    }
};

export default class searchComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { AllApiResults: null, Loading: false, Hakuna: false };
    }

    onSubmitted = (event) => {
        event.preventDefault();
        this.setState({ Loading: true });

        let searchTerm = event.target[0].value;
        const baseURL = "https://swapi.co/api/films?search=";
        let combinedURL = (baseURL + searchTerm)

        fetch(combinedURL)
            .then(results => {
                return results.json();
            })
            .then(data => {
                this.setState({ AllApiResults: data, Loading: false });
            });
    };

    onChanged = (e) => {

        if (!(e === '')) {
            this.setState({ Loading: true });

            let searchTerm = e;
            const baseURL = "https://swapi.co/api/films?search=";
            let combinedURL = (baseURL + searchTerm)

            fetch(combinedURL)
                .then(results => {
                    return results.json();
                })
                .then(data => {
                    this.setState({ AllApiResults: data, Loading: false });
                });
        } else {
            this.setState({ Loading: false });
        }
    }

    render() {
        const { AllApiResults, Loading } = this.state;
        return (
            <React.Fragment>
                <Container className="text-center width mb-3">
                    <Form onSubmit={this.onSubmitted}>
                        <Form.Group controlId="text">
                            <Form.Label>Search the API by Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter search term" onChange={e => this.onChanged(e.target.value)} />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Search
                </Button>
                    </Form>
                </Container>
                {Loading ? <Container className='text-center'> < Loader /> </Container> : <> </>}
                {AllApiResults ? <ApiCall ApiResults={AllApiResults} /> : <> </>}
            </React.Fragment>

        )
    }
}