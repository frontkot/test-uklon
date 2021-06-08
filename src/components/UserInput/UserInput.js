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
    .required('Required')
})

const UserInput = () => {
  const data = useSelector(getData);
  const dispatch = useDispatch();

  const initialValues = { item: '', }

  const addNewItem = (value, actions) => {
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
    actions.resetForm()
  }



  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(value, actions) => addNewItem(value, actions)}
    >
      {({ errors, isSubmitting }) => (
        <>
        <Form className='user__form'>
          <Field
            type='text'
            name='item'
            placeholder='New item'
            className='user__unput'
            errors={errors.item}
          />
          
          <Field 
            type='submit'
            name='submit'
            disabled={isSubmitting}
            className='user__submit'
            value='Add'
          />
        </Form>
        {errors ? <p className='user__error'>{errors.item}</p> : null}
        </>
      )
      }
    </Formik>
  );
};

export default UserInput;
