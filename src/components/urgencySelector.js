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
    control: (base, state) => ({
        ...base,
        background: "#121212",
        borderRadius: state.isFocused ? '1rem' : '1rem',
        boxShadow: state.isFocused ? null : null,
        color: 'white',
        borderColor: state.isFocused ? "#939393" : "#939393"
    }),
    menu: base => ({
        ...base,
        borderRadius: 0,
        marginTop: 0,
        color: 'white'
    }),
    menuList: base => ({
        ...base,
        padding: 0,
        color: 'white'
    }),
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? 'white' : state.data.color,
      backgroundColor: state.isSelected ? state.data.color : '#121212',
      padding: 10,
      margin: 0
    }),
    singleValue: (provided, state) => ({
        ...provided,
        color: state.data.color,
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