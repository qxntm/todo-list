import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { useDispatch } from "react-redux";

const UrgencySelector = ({ todo, urgencyOptions }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const dispatch = useDispatch();

  const findSelectedOption = (urgencyValue) => {
    return urgencyOptions.find(option => option.value === urgencyValue);
  };

  useEffect(() => {
    if (todo && todo.urgency) {
      const foundOption = findSelectedOption(todo.urgency);
      setSelectedOption(foundOption);
    }
  }, [todo, urgencyOptions]);

  const setUrgencyAction = (id, value) => ({
    type: 'todos/setUrgency',
    payload: {
      id: id,
      value: value
    }
  });

  const handleSelectUrgency = (objSelected,id) => {
    const value = objSelected.value;
    dispatch(setUrgencyAction(id, value));
  };

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: '1px dotted pink',
      color: state.isSelected ? 'white' : 'black',
      backgroundColor: state.isSelected ? 'purple' : 'white',
      padding: 20,
    }),
  };

  return (
    <Select
      value={selectedOption}
      onChange={(selectedOption) => handleSelectUrgency(selectedOption, todo.id)}
      options={urgencyOptions}
      styles={customStyles}
    />
  );
};

export default UrgencySelector;