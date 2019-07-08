import React from 'react'

// Bootsrap components
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'

// custom css
import './CardStyles.scss'

// Custom Containers
// import FilmsCard from './FilmsCard'
import PeopleCard from './PeopleCard'
import Loader from '../Loader/Loader'
import Error from '../Error/Error'

// generate keys
import uuidv4 from 'uuid/v4';

// GraphQL bindings
import { Query } from "react-apollo";
import gql from "graphql-tag";


const ApiCall = () => (

    <Query
        query={gql`
        {
            allPersons {
                name
                birthYear
            }
        }                                           
          `}
    >
        {({ loading, error, data }) => {
            if (loading) return <Loader />;
            if (error) return <Error />;


            return (
                // Only people
                data.allPersons.map((results) => {
                    return (
                        <Container key={uuidv4()}>
                            <h4 className="text-primary">People</h4>
                            <div className="row">
                                <Col sm="auto">
                                    <PeopleCard results={results} />
                                </Col>
                            </div>
                        </Container>
                    )
                })
            )

            // data.allCourses.map(({ id, title, author, description, topic, url }) => (
            //     <div key={id}>
            //       <p>{`${title} by ${author}`}</p>
            //     </div>
            //   ));


            // if (!((data.films).length === 0)) {
            //     if (!((data.allPersons).length === 0)) {
            //         // Both people and films

            //     } else {
            //         // Only films
            //         return (
            //             data.allCourses.map(({ id, title, author, description, topic, url }) => (
            //                 <div key={id}>
            //                     <p>{`${title} by ${author}`}</p>
            //                 </div>
            //             ))
            //         );

            //     }
            // } else if (!((data.allPersons.length) === 0)) {
            //     // Only people
            //     data.allPersons.map((results) => {
            //         return (
            //             <Col sm="auto" key={uuidv4()}>
            //                 <PeopleCard results={results} />
            //             </Col>
            //         )
            //     });
            // }

        }}
    </Query >
);

export default ApiCall

// export default class ApiCall extends Component {

//     // client
//     //     .query({
//     //         query: gql`
//     // {
//     //     allFilms {
//     //       title
//     //       director
//     //     }
//     //     allPersons{
//     //       name
//     //       birthYear
//     //     }
//     //   }                                           
//     //         `
//     //     })
//     //     .then(result => console.log(result));

//     render() {
//         const { ApiResults } = this.props;

//         let peopleData = null;
//         let filmData = null;

//         // return formated films
//         const filmResults = () => {
//             filmData = ApiResults.films.map((results) => {
//                 return (
//                     <Col sm="auto" key={uuidv4()}>
//                         <FilmsCard results={results} />
//                     </Col>
//                 )
//             });
//         }

//         // return formated people
//         const peopleResults = () => {
//             peopleData = ApiResults.people.map((results) => {
//                 return (
//                     <Col sm="auto" key={uuidv4()}>
//                         <PeopleCard results={results} />
//                     </Col>
//                 )
//             });
//         }

//         if (!((ApiResults.films).length === 0)) {
//             if (!((ApiResults.people).length === 0)) {
//                 // Both people and films
//                 filmResults()
//                 peopleResults()
//             } else {
//                 // Only films
//                 filmResults();
//             }
//         } else if (!((ApiResults.people.length) === 0)) {
//             // Only people
//             peopleResults();
//         }

//         return (
//             <Container>

//                 {peopleData ?
//                     <React.Fragment>
//                         <h4 className="text-primary">People</h4>
//                         <div className="row">
//                             {peopleData}
//                         </div>
//                     </React.Fragment>
//                     : <React.Fragment />}


//                 {filmData ?
//                     <React.Fragment>
//                         <h4 className="text-primary">Films</h4>
//                         <div className="row">
//                             {filmData}
//                         </div>
//                     </React.Fragment>
//                     : <React.Fragment />}



//             </Container>
//         )
//     }
// };
