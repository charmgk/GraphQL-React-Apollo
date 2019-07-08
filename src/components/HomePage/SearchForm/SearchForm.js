import React, { Component } from 'react'

// Bootsrap components
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'

// Custom Containers
import StructureCard from '../Cards/StructureCards'

// Apollo and GraphQL things
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { ApolloProvider } from "react-apollo";

// Setup endpoint and cache
const client = new ApolloClient({
    link: new HttpLink({
        uri: 'https://swapi.graph.cool/'
    }),
    cache: new InMemoryCache()
})

export default class BootstrapForm extends Component {
    constructor(props) {
        super(props);
        this.state = { startFetching: false };
    }

    handleChange = (e) => {

        // Check if there was something typed
        if (!((e.target.value).length === 0)) {
            this.setState({ startFetching: true })
        }
        else {
            this.setState({ startFetching: false })
        }
    }

    render() {
        const { startFetching } = this.state;
        return (
            <Container className="text-center width mb-3" >
                <Form>
                    <Form.Group controlId="text">
                        <Form.Label>Search by Title/Character Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter search term" onChange={this.handleChange} />
                    </Form.Group>
                </Form>

                {startFetching ? <ApolloProvider client={client}>
                    <StructureCard />
                </ApolloProvider> : <React.Fragment />}
            </Container>
        )
    }
}