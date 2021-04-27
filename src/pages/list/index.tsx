import React, { useState, useEffect } from 'react';
import api from '../../services/base.service';
import './style.css';

import Moment from 'moment';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

interface CharacterProps {
  id: number,
  first_name: string,
  last_name: string,
  birth_date: Date,
}

const List: React.FC = () => {

  const [characters, setCharacters] = useState<CharacterProps[]>([]);
  const history = useHistory();

  useEffect(() => {
    getCharacters();
  }, []);

  async function getCharacters() {
    const response = await api.get("");
    const data = response.data;
    setCharacters(data);
  }

  async function deleteCharacter(id:number) {
    const response = await api.delete(`${id}/`);
    getCharacters();
    return response;
  }

  function alertDelete(id: number) {
    sweetAlert({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: ["No, cancel please.", "Yes, I wanna."],
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          sweetAlert("Done! The character has been deleted.", {
            icon: "success",
          });
          deleteCharacter(id);
        } else {
          sweetAlert("Keep calm... The character is still registered.");
        }
      });
  }

  function getAgeFromBirthday(date: Date) {
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

  function formatDateToBR(date: Date) {
    return Moment(date).format("DD/MM/YYYY");
  };

  function newCharacter() {
    history.push('/create-character');
  }

  function editCharacter(id: number) {
    history.push(`/create-character/${id}`);
  }

  function detailCharacter(id: number) {
    history.push(`/detail-character/${id}`);
  }

  return (
    <div className="container mt-5">
      <div className="d-flex flex-row justify-content-between align-middle">
        <h1 className="mb-4">List page</h1>
        <Button size="sm" variant="dark" id="buttonNewCharacter" onClick={newCharacter}>New Character</Button>
      </div>
      <table className="table table-hover text-center">
        <thead>
          <tr className="border">
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Birth Date</th>
            <th>Age</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            characters.map(({ id, first_name, last_name, birth_date }, index) => {
              return (
                <tr key={id} className="">
                  <td>{index + 1}</td>
                  <td>{first_name}</td>
                  <td>{last_name}</td>
                  <td>{formatDateToBR(birth_date)}</td>
                  <td>{getAgeFromBirthday(birth_date)}</td>
                  <td>
                    <Button
                      size="sm"
                      variant="info"
                      onClick={() => editCharacter(id)}
                    >Edit</Button>
                    <Button
                      size="sm"
                      variant="secondary"
                      className="ml-2"
                      onClick={() => detailCharacter(id)}
                    >Detail</Button>
                    <Button
                      size="sm"
                      variant="danger"
                      className="ml-2"
                      onClick={() => alertDelete(id)}
                    >Delete</Button>
                  </td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default List;
