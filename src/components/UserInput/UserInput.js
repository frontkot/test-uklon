import React from 'react';
import './UserInput.scss';
import { Formik, Form, Field } from 'formik';
import * as yup from "yup";
import { useSelector, useDispatch } from 'react-redux';
import { getData } from '../../store/userItems/selectors';
import { updateData } from '../../store/userItems/actions';


const validationSchema = yup.object().shape({
  item: yup
    .string()
    .typeError('Введите новый айтем')
    .required('Введите данные')
})

const UserInput = () => {
  const data = useSelector(getData);
  const dispatch = useDispatch();

  const initialValues = { item: '', }

  const addNewItem = (value) => {
    const dataLength = data.length;
    const newItemValue = [];
    for (let i = 0; i <= dataLength; i++) {
      switch(i) {
        case dataLength:
          newItemValue.push(null);
          break;
        default:
          newItemValue.push(false);
          break;
      }
    }

    const newItem = {name: value.item, value: newItemValue}

    if(dataLength > 0) {
      data.forEach(e => e.value.push(true))
    };
    
    data.push(newItem);

    dispatch(updateData(data));

    console.log(data)
  }






  return (
    <Formik
      initialValues={initialValues}
      // validationSchema={validationSchema}
      onSubmit={(value) => addNewItem(value)}
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
