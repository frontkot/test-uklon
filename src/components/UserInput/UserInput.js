import React from 'react';
import './UserInput.scss';
import { Formik, Form, Field } from 'formik';
import * as yup from "yup";
import { useSelector, useDispatch } from 'react-redux';
import { getData } from '../../store/userItems/selectors';
import { updateData } from '../../store/userItems/actions';

const UserInput = () => {
  const data = useSelector(getData);
  const dispatch = useDispatch();

  yup.addMethod(yup.string, 'uniqueName', function isUniwueName(message) {
    return this.test(`test-uniwue-name`, message, function (value) {
      const { path, createError } = this;
      let names;
  
      if (data.length > 0) {
        names = data.map(e => e.name);
      }

      const isUnique = value !== undefined && data.length > 0 ? !names.includes(value.toLowerCase()) : true;
  
      return (
        isUnique ||
        createError({ path, message: message })
      );
    });
  })
  
  const validationSchema = yup.object().shape({
    item: yup
      .string()
      .required('Required')
      .uniqueName('This item already exists')
  })
  
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
    
    const newData = [...data, newItem];

    dispatch(updateData(newData));
    actions.resetForm()
  }

  return (
    <Formik
      initialValues={{ item: '' }}
      validationSchema={validationSchema}
      onSubmit={(value, actions) => addNewItem(value, actions)}
    >
      {({ errors, isSubmitting }) => (
        <>
          <Form className='user__form'>
            <Field
              type='text'
              name='item'
              placeholder={data.length ? 'New item' : 'Add your first item'}
              className='user__unput'
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
