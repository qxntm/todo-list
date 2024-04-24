import React, { forwardRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, toggleCheckbox } from "../lib/feature/todos/todosSlice";
import { 
  Title, 
  InputText, 
  AddButton, 
  Flex, 
  All, 
  InputCheck, 
  DelButton, 
  Label, 
  List,
  DatePickerStyled,
  DeadLine,
  DeadLineDate } from "../styles/TodoList.styled";
import { ClipboardText } from "@phosphor-icons/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import UrgencySelector from "./urgencySelector";

const Todo = () => {
  const [text, setText] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());

  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const setAddAction = (text, deadLine) => ({
    type: 'todos/addTodo',
    payload: {
      text: text,
      deadLine: deadLine
    }
  });

  const handleAddTodo = () => {
    if (text) {
      const formattedDate = selectedDate ? selectedDate.toLocaleString('en-GB', { timeZone: 'UTC' }) : null;
      dispatch(setAddAction(text, formattedDate));
      setText("");
      setSelectedDate(new Date());
    }
  };

  const handleInputChange = (e) => { setText(e.target.value) };
  const handleDeadLine = (date) => { setSelectedDate(date) };
  const handleToggleComplete = (id) => { dispatch(toggleCheckbox(id)) };
  const handleDeleteTodo = (id) => { dispatch(deleteTodo(id)) };

  const urgencyOptions = [
    { value: 'urgent', label: 'Urgent', color: '#c90000' },
    { value: 'important', label: 'Important', color: '#9d46f4' },
    { value: 'waitingOn', label: 'Waiting On', color: '#ffc107' },
    { value: 'toDo', label: 'To Do', color: '#00bcd4' },
    { value: 'maybe', label: 'Maybe?', color: '#575757' },
  ];

  const DatePickerStyle = forwardRef(({ value, onClick }, ref) => (
    <DatePickerStyled onClick={onClick} ref={ref}>
      {value}
    </DatePickerStyled>
  ));

  return (
    <All>
      <Title>
        <ClipboardText size={44} color="#d4a4fc" weight="bold" />
        Todo List
      </Title>
      <Flex>
        <InputText value={text} placeholder="Enter New Task" onChange={handleInputChange} />
        <DeadLine>
          <p>Dead Line</p>
          <DatePickerStyled>
            <DatePicker
              selected={selectedDate}
              onChange={handleDeadLine}
              customInput={<DatePickerStyle />}
            />
          </DatePickerStyled>
        </DeadLine>
        <AddButton onClick={handleAddTodo}> + </AddButton>
      </Flex>
      <ul>
        {todos?.map((todo) => (
          <List>
            <InputCheck
              id={todo.id}
              name={todo.text}
              checked={todo.completed}
              onChange={() => handleToggleComplete(todo.id)}
            />
            <Label for={todo.text}>{todo.text}</Label>
            <UrgencySelector
              todo={todo}
              urgencyOptions={urgencyOptions}
            />
            <DeadLine>
              <p>DeadLine:</p>
              <DeadLineDate>{todo.deadLine.slice(0,10)}</DeadLineDate>
            </DeadLine>
            <DelButton onClick={() => handleDeleteTodo(todo.id)}> - </DelButton>
          </List>
        ))}
      </ul>
    </All>
  );
};

export default Todo;