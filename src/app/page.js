"use client";
import Image from "next/image";
import styles from "./page.module.css";
import styled from "styled-components";
import React from "react";
import { Provider } from "react-redux";
import Todo from "../components/TodoList";
import { persistor, store } from '../lib/store';
import { PersistGate } from 'redux-persist/integration/react';
import LogRocket from 'logrocket';
LogRocket.init('zbfi9v/todo-list');

export default function Home() {

  return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Todo />
        </PersistGate>
      </Provider>
  );
}
