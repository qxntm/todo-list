import styled, { ThemeProvider } from "styled-components";

export const All = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    width: auto;
    font-family: monospace;
    background-color: #121212;
`;

export const Title = styled.h1`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 3em;
    font-weight: bold;
    font-family: monospace;
    margin-bottom: 0.5rem;
    padding-top: 2rem;
    color: #d4a4fc;
`;

export const InputText = styled.input.attrs({ 
    type: 'text'
  })`
    border: 2px solid #9d46f4;
    border-radius: 2rem;
    padding: 0.5rem;
    font-size: 1rem;
    padding-left: 1rem;
    background: #1f1725;
`;

export const AddButton = styled.button.attrs({ 
    id: 'Add'
  })`
    background-color: #9d46f4;
    padding: 0.375rem 0.7rem 0.375rem 0.7rem;
    font-size: 1.25rem;
    font-weight: bold;
    border: 2px solid #9d46f4;
    border-radius: 2rem;
`;

export const Flex = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.5rem 0 0 0;
    gap: 1rem;
`;

export const InputCheck = styled.input.attrs({ 
    type: 'checkbox'
  })`
    border: 2px solid #9d46f4;
    border-radius: 2rem;
    padding: 0.5rem;
    font-size: 1rem;
    padding-left: 1rem;
    background: #1f1725;
    margin-top: 0;
`;

export const Label = styled.label`
    font-size: 1rem;
      ${InputCheck}:checked + && {
        text-decoration: line-through;
        color: #342c3a;
      }
`;

export const DelButton = styled.button.attrs({ 
    id: 'Del'
  })`
    background-color: #342c3a;
    padding: 0.05rem 0.5rem 0.05rem 0.5rem;
    font-size: 1.25rem;
    font-weight: bold;
    border: 2px solid #342c3a;
    border-radius: 2rem;
    margin: 0 0 0 0.5rem;
    ${InputCheck}:checked + && {
        color: #342c3a;
      }
`;

export const List = styled.div`
      display: grid;
      grid-template-columns: 10px 2fr 150px 1fr 0.25fr;
      align-items: center;
      gap: 1rem;
      margin: 1rem 0 0 0;
`;

export const DatePickerStyled = styled.button`
    font-family: monospace;
    background-color: #9d46f4;
    color: #ffffff;
    border: 3px solid #9d46f4;
    border-radius: 3px;
`

export const DeadLine = styled.div`
    font-family: monospace;
    display: grid;
    gap: 5px;
    margin: 0 0 1.05rem 0;
    color: #939393;
`
export const DeadLineDate = styled.div`
    color: #9d46f4;
`