import React from 'react';
// import api from '../../../services/base.service';
import { Button, Form, Row } from 'react-bootstrap';

/* interface CharacterProps {
  id: number,
  first_name: string,
  last_name: string,
  birth_date: Date,
} */

const FormCreate: React.FC = () => {
  return (
    <div className="container mt-5">
      <div className="d-flex flex-row justify-content-between align-middle">
        <h1 className="mb-4">Create new character</h1>
        <Button size="sm" variant="dark" id="buttonNewCharacter">Back</Button>
      </div>
      <Form>
        <Row>
          <Form.Group className="col col-xs-12 col-sm-6 col-md-4 col-lg-4">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter the first name" />
            <Form.Text className="text-muted">
              Like Naruto
            </Form.Text>
          </Form.Group>
          <Form.Group className="col col-xs-12 col-sm-6 col-md-4 col-lg-4">
            <Form.Label>Last name</Form.Label>
            <Form.Control type="text" placeholder="Enter the last name" />
            <Form.Text className="text-muted">
              Like Uzumaki
            </Form.Text>
          </Form.Group>
          <Form.Group className="col col-xs-12 col-sm-6 col-md-4 col-lg-4">
            <Form.Label>Birth date</Form.Label>
            <Form.Control type="date" placeholder="" />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
        </Row>
        <Row className="justify-content-md-center">
          <Button variant="success" type="submit" className="btn mt-5 col-6">
            Submit
          </Button>
        </Row>

      </Form>
    </div>
  )
}

export default FormCreate;
