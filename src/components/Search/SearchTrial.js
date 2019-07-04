import React, { Component } from 'react'

// Bootsrap components
import Container from 'react-bootstrap/Container'

// Custom Containers
import BootstrapForm from '../Form/Form'
import Loader from '../Loader/Loader'
import StructureCard from '../Cards/StructureCards'

import './styles.scss'

export default class searchComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { AllApiResults: null, Loading: false };
    }

    onChanged = (e) => {

        let searchTerm = e;

        if (!(e === '')) {
            this.setState({ Loading: true });

            let baseFilmsURL = `https://swapi.co/api/films?search=`;
            let filmsURL = (baseFilmsURL + searchTerm);

            let basePeopleURL = `https://swapi.co/api/people?search=`;
            let peopleURL = (basePeopleURL + searchTerm);

            let filmsPromise = fetch(filmsURL)
                .then(response => response.json())
                .then(json => {
                    let filmsData = json.results.map((film) => {
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
                }
                );

            let peoplePromise = fetch(peopleURL)
                .then(response => response.json())
                .then(json => {
                    let peopleData = json.results.map((person) => {
                        return ({
                            name: person.name,
                            birth_year: person.birth_year,
                            gender: person.gender,
                            skin_color: person.skin_color,
                            height: person.height,
                            mass: person.mass
                        })
                    });

                    return peopleData
                }
                );

            Promise.all([filmsPromise, peoplePromise])
                .then(results => {
                    results = { "films": results[0], "people": results[1] };
                    this.setState({ AllApiResults: results, Loading: false });
                })
        } else {
            this.setState({ Loading: false, AllApiResults: null });

            setTimeout(() => { this.setState({ Loading: false, AllApiResults: null }); }, 2000)
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