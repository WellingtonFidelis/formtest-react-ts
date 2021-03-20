import React, { useState, useEffect, ChangeEvent, useCallback } from "react";
import styles from "../styles/components/FormTest.module.css";
import Api from "../services/base.service";
import api from "../services/base.service";

interface Persons {
  id: number;
  first_name: string;
  last_name: string;
  birth_date: Date;
}

interface PersonAdd {
  first_name: string;
  last_name: string;
  birth_date: Date;
}

const FormTest: React.FC = () => {
  // const [inputFirstName, setInputFirstName] = useState<String>();
  const [persons, setPersons] = useState<Persons[]>([]);
  const [personAdd, setPersonAdd] = useState<PersonAdd>({
    first_name: "",
    last_name: "",
    birth_date: new Date(),
  });

  function updatedPersonAdd(event: ChangeEvent<HTMLInputElement>) {
    setPersonAdd({
      ...personAdd,
      [event.target.name]: event.target.value,
    });
  }

  /* const handleChangeInputFirstName = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInputFirstName(event.currentTarget.value);
    console.log(inputFirstName);
  };
 */
  const onSubmit = async (event: ChangeEvent<HTMLFormElement>) => {
    event?.preventDefault();

    const response = await api.post("", personAdd);
    console.log(response);
  };

  const loadPeople = useCallback(async () => {
    const response = await Api.get("");
    try {
      if (response.status === 200) {
        setPersons(response.data);
        console.log(persons);
      }
    } catch (error) {
      console.log(error);
    }
  },[persons]) 

  useEffect(() => {
    loadPeople();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.FormTextContainer}>
      <form onSubmit={onSubmit}>
        <label htmlFor="inputFisrtName">
          Fisrt Name
          <input
            type="text"
            className=""
            id="inputFisrtName"
            name="first_name"
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              updatedPersonAdd(event)
            }
          />
        </label>
        <label htmlFor="inputLastName">
          Last Name
          <input
            type="text"
            className=""
            id="inputLastName"
            name="last_name"
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              updatedPersonAdd(event)
            }
          />
        </label>
        <label htmlFor="inputDateBirth">
          Date Birth
          <input
            type="date"
            className=""
            id="inputDateBirth"
            name="birth_date"
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              updatedPersonAdd(event)
            }
          />
        </label>
        <button type="submit">Send</button>
        {/* <p> {inputFirstName} </p> */}
      </form>
      <div>
        <table className="">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Birth Date</th>
            </tr>
          </thead>
          <tbody>
            {persons.map((person) => (
              <tr key={person.id}>
                <td>{person.id}</td>
                <td>{person.first_name}</td>
                <td>{person.last_name}</td>
                <td>{person.birth_date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FormTest;
