import React from "react";
import Styles from "./Styles";
import { Form, Field } from "react-final-form";
import Radio from "./RadioBtn"
import Select from "./Select"
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const FormCreate = ({ onSubmit, initialValues }) => (
  <Styles>
    <Form
      onSubmit={onSubmit}
      initialValues={initialValues}
      render={({ handleSubmit, reset, submitting, pristine, values }) => (
        
        <form onSubmit={handleSubmit}>
          <div>
            <label>First Name</label>
            <Field
              name="firstName"
              component="input"
              type="text"
              placeholder="First Name"
            />
          </div>
          <div>
            <label>Last Name</label>
            <Field
              name="lastName"
              component="input"
              type="text"
              placeholder="Last Name"
            />
          </div>
          <div>
            <label>Email</label>
            <Field
              name="email"
              component="input"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="buttons">
            <button type="submit" disabled={submitting || pristine}>
              Submit
            </button>
          </div>
         
          <Select/>
          Пол:
              <Radio 
              sex='wman'
              child='Женский'
              />
              <Radio 
              sex='man'
              child='Мужской'
              />
          <pre>{JSON.stringify(values, 0, 2)}</pre>
          {console.log(values.city)}
        </form>
      )}
    />
  </Styles>
);

export default FormCreate;
