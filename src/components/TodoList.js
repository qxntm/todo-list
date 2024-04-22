import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, setUrgency, deleteTodo, toggleCheckbox } from "../lib/feature/todos/todosSlice";
import {Title, InputText, AddButton, Flex, All, InputCheck, DelButton, Label, List} from "../styles/TodoList.styled";
import { ClipboardText } from "@phosphor-icons/react";
import Select from "react-select";

const Todo = () => {
  const [text, setText] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleAddTodo = () => {
    if (text) {
      dispatch(addTodo(text));
      setText("");
    }
  };

  const handleToggleComplete = (id) => {
    dispatch(toggleCheckbox(id));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleSelectUrgency = (todoId, selectedOption) => {
    console.log(todoId)
    console.log(selectedOption)
    if(selectedOption){
      dispatch(setUrgency(todoId));
      selectedOption(null);
    }
  };

  const urgencyOptions = [
    { value: 'urgent', label: 'Urgent', color: '#c90000' },
    { value: 'important', label: 'Important', color: '#9d46f4' },
    { value: 'waitingOn', label: 'Waiting On', color: '#ffc107' },
    { value: 'toDo', label: 'To Do', color: '#00bcd4' },
    { value: 'maybe', label: 'Maybe?', color: '#575757' },
  ];
  

  return (
    <All>
      <Title>
        <ClipboardText size={44} color="#d4a4fc" weight="bold" />
        Todo List
      </Title>
      <Flex>
      <InputText value={text} placeholder="Enter New Task" onChange={handleInputChange} />
      <AddButton onClick={handleAddTodo}> + </AddButton>
      </Flex>
      <ul>
        {todos?.map((todo) => (
          <List>
            <InputCheck
              id={todo.id}
              name={todo.text}
              checked={todo.completed}
              onClick={() => handleToggleComplete(todo.id)}
            />
            <Label for={todo.text}>{todo.text}</Label>
            <Select
              defaultValue={todo.urgency}
              onChange={handleSelectUrgency}
              options={urgencyOptions}
            />
            <DelButton onClick={() => handleDeleteTodo(todo.id)}> - </DelButton>
          </List>
        ))}
      </ul>
    </All>
  );
};

export default Todo;