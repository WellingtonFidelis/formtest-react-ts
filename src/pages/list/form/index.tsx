import React, { ChangeEvent, useEffect, useState } from 'react';
import api from '../../../services/base.service';
import { Button, Form, Row, Col } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';

import SweetAlert from 'sweetalert';
import { AxiosResponse } from 'axios';

interface CharacterProps {
  first_name: string,
  last_name: string,
  birth_date: Date,
}

interface Params {
  id: string
}

const FormCreate: React.FC = () => {

  const history = useHistory();
  const { id }: Params = useParams();
  const [model, setModel] = useState<CharacterProps>({
    first_name: '',
    last_name: '',
    birth_date: new Date(),
  });

  useEffect(() => {
    if (id !== undefined) {
      getCharactersById(id);
    }
  }, [id]);

  function updatingModel(event: ChangeEvent<HTMLInputElement>) {
    setModel({
      ...model,
      [event.target.name]: event.target.value,
    });
  }
  function listCharacters() {
    history.push('/list-character');
  }
  async function onSubmitForm(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();

    if (id !== undefined) {
      const response = await api.patch(`${id}/`, model);
      alertMessage(response);
    } else {
      const response = await api.post("/", model);
      alertMessage(response);
    }

  }
  async function getCharactersById(id: string) {
    const response = await api.get(`${id}/`);
    const data = await response.data;
    setModel({
      first_name: data.result.first_name,
      last_name: data.result.last_name,
      birth_date: data.result.birth_date,
    });
  }
  function alertMessage(response: AxiosResponse) {
    if (response.data.status === "Ok") {
      SweetAlert(response.data.status, response.data.message, "success");
      listCharacters();
    } else {
      SweetAlert(response.data.status, response.data.message, "error");
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
            <Form.Control
              type="text"
              placeholder="Enter the first name"
              name="first_name"
              value={model.first_name}
              onChange={(event: ChangeEvent<HTMLInputElement>) => updatingModel(event)}
            />
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
              value={model.last_name}
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
              value={String(model.birth_date)}
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
