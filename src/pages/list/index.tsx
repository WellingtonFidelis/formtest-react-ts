import React, { useState, useEffect } from 'react';
import api from '../../services/base.service';

import Moment from 'moment';

interface CharacterProps {
  id: number,
  first_name: string,
  last_name: string,
  birth_date: Date,
}

const List: React.FC = () => {

  const [characters, setCharacters] = useState<CharacterProps[]>([]);

  useEffect(() => {
    getCharacters();
  }, []);

  const getCharacters = async () => {
    const response = await api.get("");
    const data = response.data;
    setCharacters(data);
  }

  const getAgeFromBirthday = (date: Date) => {
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

  const formatDateToBR = (date: Date) => {
    return Moment(date).format("DD/MM/YYYY");
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">List page</h1>
      <table className="table table-hover text-center">
        <thead>
          <tr className="border">
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Birth Date</th>
            <th>Age</th>
            <th></th>
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
                  <td></td>
                  <td></td>
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
