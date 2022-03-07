import { useState } from "react";
import { Form, Button, Card } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import axios from "axios";

const AddMovie = () => {

    const [formValues, setFormValues] = useState('');
    const history = useHistory();

    const onChangeFormField = (event) => {
        const { value, name, type } = event.target;
        setFormValues({
            ...formValues,
            [name]: type === "number" ? Number(value) : value 
        });
    }

    const onClickAddMovie = async () => {
        try {
            await axios({
                method: "POST",
                url: 'http://localhost:4000/api/movies',
                data: formValues

            });
            history.push('/')
        } catch (error) {
            alert(error)
        }

    }


    return (
        <Card className="bg-warning">
            <Card.Header>Please Enter Movie Detials</Card.Header>
            <Card.Body>
                <Form.Group className="mb-3" controlId="title">
                    <Form.Label>Movie Title</Form.Label>
                    <Form.Control type="text" name="title" onChange={onChangeFormField} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="ratings">
                    <Form.Label>Movie Ratings</Form.Label>
                    <Form.Control type="number" name="ratings" onChange={onChangeFormField} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="poster">
                    <Form.Label>Movie Poster</Form.Label>
                    <Form.Control type="text" name="poster" onChange={onChangeFormField} />
                </Form.Group>
                <Button variant="success" type="button" onClick={onClickAddMovie}>
                    Submit
                </Button>
            </Card.Body>
        </Card>
    )
}

export default AddMovie;