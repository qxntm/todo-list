import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleComplete, deleteTodo } from "../lib/feature/todos/todosSlice";
import {Title, InputText, AddButton, Flex, All, InputCheck, DelButton, Label, FlexList} from "../styles/TodoList.styled";
import { ClipboardText } from "@phosphor-icons/react";

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
    dispatch(toggleComplete(id));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

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
        
        {todos.map((todo) => (
          <div>
            <InputCheck
              id={todo.id}
              name={todo.text}
              onClick={() => handleToggleComplete(todo.id)}
            />
            <Label for={todo.text}>{todo.text}</Label>
            <DelButton onClick={() => handleDeleteTodo(todo.id)}> - </DelButton>
          </div>
        ))}
      </ul>
    </All>
  );
};

export default Todo;