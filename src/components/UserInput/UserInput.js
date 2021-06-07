import React from 'react';
import './UserInput.scss';
import { Formik, Form, Field } from 'formik';
import * as yup from "yup";


const validationSchema = yup.object().shape({
  item: yup
    .string()
    .typeError('Введите новый айтем')
    .required('Введите данные')
})

const UserInput = () => {
  return (
    <Formik
      validationSchema={validationSchema}
      onSubmit={() => {}}
    >
      {({ errors }) => (
        <Form className=''>
          <Field
            type='text'
            name='item'
            placeholder='New item'
            className=''
            errors={errors}
          />
          <Field 
            type='submit'
            name='submit'
            className=''
            value='Add'
          />
        </Form>
      )
      }
    </Formik>
  );
};

export default UserInput;
