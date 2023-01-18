 
 import React, { useState } from "react";

function Form(props) {
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");
  const [errors, setErrors] = useState([]);

  const [submittedData, setSubmittedData] = useState([]);

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if(firstName.length) {
      const formData = {
        firstName: firstName,
        lastName: lastName,
      }
      setSubmittedData([formData, ...submittedData])
      setFirstName("");
      setLastName("");
      setErrors([]);
    } else {
      setErrors(["Please enter a first name"]);
    }
    
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
    </form>
    {
      errors.length > 0
      ? errors.map((error, index) =>{
        return <p key={index} style={{ color: "red" }}>{error}</p>
      })
      : null
    }
    <h3>Submissions</h3>
    {
      submittedData.map((data, index) => {
        return (
          <div key={index}>
            <h4>{data.firstName} {data.lastName}</h4>
          </div>
        )
      })
    }
    </>
  );
}

export default Form;