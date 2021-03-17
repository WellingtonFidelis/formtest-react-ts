import React, { useState } from "react";
import styles from "../styles/components/FormTest.module.css";

const FormTest = () => {
  const [inputFirstName, setInputFirstName] = useState<String>();

  const handleChangeInputFirstName = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInputFirstName(event.currentTarget.value);
    console.log(inputFirstName);
  };

  return (
    <div className={styles.FormTextContainer}>
      <form action="">
        <label htmlFor="inputFisrtName">
          Fisrt Name
          <input
            type="text"
            className=""
            id="inputFisrtName"
            name="inputFisrtName"
            onChange={handleChangeInputFirstName}
          />
        </label>
        <label htmlFor="inputLastName">
          Last Name
          <input
            type="text"
            className=""
            id="inputLastName"
            name="inputLastName"
          />
        </label>
        <label htmlFor="inputDateBirth">
          Date Birth
          <input
            type="date"
            className=""
            id="inputDateBirth"
            name="inputDateBirth"
          />
        </label>
        <button type="button">Send</button>
        <p> {inputFirstName} </p>
      </form>
    </div>
  );
};

export default FormTest;
