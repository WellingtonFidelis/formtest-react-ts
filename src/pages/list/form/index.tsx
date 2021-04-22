import React, { ChangeEvent, useState } from 'react';
import api from '../../../services/base.service';
import { Button, Form, Row, Col, Toast } from 'react-bootstrap';
import { useHistory } from 'react-router';

interface CharacterProps {
  first_name: string,
  last_name: string,
  birth_date: Date,
}

const FormCreate: React.FC = () => {

  const [model, setModel] = useState<CharacterProps>({
    first_name: '',
    last_name: '',
    birth_date: new Date(),
  });
  const history = useHistory();

  const updatingModel = (event: ChangeEvent<HTMLInputElement>) => {
    setModel({
      ...model,
      [event.target.name]: event.target.value,
    });
  }

  const listCharacters = () => {
    history.push('/list-character');
  }

  const onSubmitForm = async (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    const response = await api.post("/", model);

    if (response.data.status === "Ok") {

      const message = {
        "status": response.data.status,
        "result": response.data.result,
        "message": response.data.message,
      }
    }    
  }

  return (
    <div className="container mt-5">
      <div className="d-flex flex-row justify-content-between align-middle">
        <h1 className="mb-4">Create new character</h1>
        <Button size="sm" variant="dark" id="buttonNewCharacter" onClick={listCharacters}>Back</Button>
      </div>
      <Form onSubmit={onSubmitForm}>
        <Row>
          <Form.Group className="col col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter the first name" name="first_name" onChange={(event: ChangeEvent<HTMLInputElement>) => updatingModel(event)} />
            <Form.Text className="text-muted">
              Like Naruto
            </Form.Text>
          </Form.Group>
          <Form.Group className="col col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <Form.Label>Last name</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Enter the last name" 
              name="last_name" 
              onChange={(event: ChangeEvent<HTMLInputElement>) => updatingModel(event)}
            />
            <Form.Text className="text-muted">
              Like Uzumaki
            </Form.Text>
          </Form.Group>
          <Form.Group className="col col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <Form.Label>Birth date</Form.Label>
            <Form.Control
              type="date"
              placeholder=""
              name="birth_date"
              onChange={(event: ChangeEvent<HTMLInputElement>) => updatingModel(event)}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
        </Row>
        <Row className="justify-content-md-center">
          <Col className="col-1"></Col>
          <Col>
            <Button variant="success" type="submit" className="btn mt-5 col-xs-12 col-sm-12 col-md-12 col-lg-12">
              Submit
          </Button>
          </Col>
          <Col className="col-1"></Col>
        </Row>
      </Form>
    </div>
  );
}

export default FormCreate;
