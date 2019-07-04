import React from 'react'

// Bootsrap components
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'

export default (props) => {

    const handleChange = (e) => {
        props.onChanged(e.target.value);
    }

    return (
        <Container className="text-center width mb-3">
            <Form>
                <Form.Group controlId="text">
                    <Form.Label>Search the API by Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter search term" onChange={handleChange} />
                </Form.Group>
            </Form>
        </Container>
    )
}