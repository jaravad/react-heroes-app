import { useState } from 'react';

export const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const reset = (newValues = initialState) => {
    setValues(newValues);
  };
  const handleChange = ({ target: { name, value } }) => {
    setValues({ ...values, [name]: value });
  };

  return [values, handleChange, reset];
};
