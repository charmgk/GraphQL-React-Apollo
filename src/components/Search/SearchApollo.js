import React, { Component } from 'react'

// Bootsrap components
import Container from 'react-bootstrap/Container'

// custom styles
import './styles.scss'

// Custom Containers
import BootstrapForm from '../Form/Form'
import Loader from '../Loader/Loader'
import StructureCard from '../Cards/StructureCards'

// Apollo qraphQL things
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { RestLink } from 'apollo-link-rest';

// This will be used by the querry method (onchange)
import gql from 'graphql-tag';

export default class searchComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { AllApiResults: null, Loading: false };
    }

    onChanged = (e) => {

        let searchTerm = e;

        if (!(e === '')) {
            this.setState({ Loading: true });

            // Set Base Endpoint Link
            const restLink = new RestLink({
                uri: 'https://swapi.co/api/'
            });

            // Use the link in apollo client
            const client = new ApolloClient({
                link: restLink,
                cache: new InMemoryCache()
            });

            // Form the querry
            const peopleQuerry = gql`
            query people {
              people @rest(type: "people", path: "people/?search=${searchTerm}") {
                results
              }
            }
          `;

            const filmsQuerry = gql`
          query films {
            films @rest(type: "films", path: "films/?search=${searchTerm}") {
              results
            }
          }
        `;

            // formulate first querry endpoint
            const peopleQuerryPromise = client.query({ query: peopleQuerry }).then(response => {
                let peopleData = response.data.people.results.map((person) => {
                    return ({
                        name: person.name,
                        birth_year: person.birth_year,
                        gender: person.gender,
                        skin_color: person.skin_color,
                        height: person.height,
                        mass: person.mass
                    })
                });
                return peopleData;
            })

            // formulate second querry endpoint
            const filmsQuerryPromise = client.query({ query: filmsQuerry }).then(response => {
                let filmsData = response.data.films.results.map((film) => {
                    return ({
                        title: film.title,
                        episode_id: film.episode_id,
                        director: film.director,
                        producer: film.producer,
                        opening_crawl: film.opening_crawl,
                        release_date: film.release_date
                    })
                });
                return filmsData;
            })

            // Execute the two querries and set the data as two arrays embeded in one
            Promise.all([peopleQuerryPromise, filmsQuerryPromise])
                .then(results => {
                    results = { "people": results[0], "films": results[1] };
                    this.setState({ AllApiResults: results, Loading: false });
                })

        } else {
            this.setState({ Loading: false, AllApiResults: null });
        }
    }

    render() {
        const { Loading, AllApiResults } = this.state;
        return (
            <React.Fragment>
                <BootstrapForm onChanged={this.onChanged} />
                {Loading ? <Container className='text-center'> < Loader /> </Container> : <React.Fragment> </React.Fragment>}
                {AllApiResults ? <StructureCard ApiResults={AllApiResults} /> : <React.Fragment> </React.Fragment>}
            </React.Fragment>
        )
    }
}