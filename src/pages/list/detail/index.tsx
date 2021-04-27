import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import api from '../../../services/base.service';
import Moment from 'moment';

interface CharacterProps {
  id: string,
  first_name: string,
  last_name: string,
  birth_date: Date,
  age: number,
}

interface Params {
  id: string
}

const Detail: React.FC = () => {

  const history = useHistory();
  const { id }: Params = useParams();
  const [character, setCharacter] = useState<CharacterProps>();

  useEffect(() => {
    findCharacter(id);
  }, [id]);

  function listCharacters() {
    history.push('/list-character');
  }

  async function findCharacter(id: string) {
    const response = await api.get(`${id}/`);
    const data = response.data.result;
    setCharacter(data);
  }

  function getAgeFromBirthday(date: Date | undefined) {
    if (date) {
      let totalMonths: number = Moment().diff(date, 'months');
      let years: number = totalMonths / 12;
      let months = totalMonths % 12;
      if (months !== 0) {
        return Math.ceil(parseFloat(years + '.' + months));
      }
      return Math.ceil(years);
    }
    return null;
  }

  function formatDateToBR(date: Date | undefined) {
    return Moment(date).format("DD/MM/YYYY");
  };

  return (
    <div className="container mt-5">
      <div className="d-flex flex-row justify-content-between align-middle">
        <h1 className="mb-4">Detail character</h1>
        <Button size="sm" variant="dark" id="buttonNewCharacter" onClick={listCharacters}>Back</Button>
      </div>
      <Card style={{ width: '100vh' }}>
        <Card.Body>
          <Card.Title>{character?.first_name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{character?.last_name}</Card.Subtitle>
          <Card.Text>
            <br />
            <strong>Birth date: </strong>{formatDateToBR(character?.birth_date)}
            <br />
            <strong>Age: </strong>{getAgeFromBirthday(character?.birth_date)}
          </Card.Text>
          {/* <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link> */}
        </Card.Body>
      </Card>
    </div>
  );
}

export default Detail;