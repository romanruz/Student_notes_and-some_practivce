import React from "react";
import Styles from "./Styles";
import { Form, Field } from "react-final-form";
import Radio from "./RadioBtn"
import Select from "./Select"
import Input from "./Input"
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const FormCreate = ({ onSubmit, initialValues }) => (
  <Styles>
    <Form
      onSubmit={onSubmit}
      initialValues={initialValues}
      render={({ handleSubmit, reset, submitting, pristine, values }) => (
        
        <form onSubmit={handleSubmit}>
      
          <Input 
          component={Input}
          placeholder='FirstName'
          name="FirstName" 
          />
          <Input
          placeholder='LastName'
          name='LastName'
          />
          <Input
        placeholder='Email'
        name='Email'
          />
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
                <div className="buttons">
              <button type="submit" disabled={submitting || pristine}>
                Submit
              </button>
            </div>

          <pre>{JSON.stringify(values, 0, 2)}</pre>
         
        </form>
      )}
    />
  </Styles>
);

export default FormCreate;
