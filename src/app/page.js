"use client";
import Image from "next/image";
import styles from "./page.module.css";
import styled from "styled-components";
import React from "react";
import { Provider } from "react-redux";
import store from "../lib/store";
import Todo from "../components/TodoList";

export default function Home() {

  return (
    <Provider store={store}>
       <Todo /> 
    </Provider>
  );
}
