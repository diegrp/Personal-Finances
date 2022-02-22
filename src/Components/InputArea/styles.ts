import styled from "styled-components";

/* Container do input */

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: var(--size-padding);
  border-radius: var(--size-radius);
  box-shadow: 3px 3px 15px 5px #ccc;
  margin-top: var(--size-margin);
`;

/* Label */

export const InputLabel = styled.label`
  flex: 1;
  margin: 10px;
`;

/* Título do input */

export const InputText = styled.div`
  margin-bottom: 5px;
  font-weight: bold;
`;

/* Input Text */

export const Input = styled.input`
  width: 100%;
  height: 30px;
  padding: 0 5px;
  border-radius: 5px;
  border: 1px solid var(--color-light);
  transition: var(--transition);
  outline: none;

  &:focus{
    background-color: rgba(0, 102, 251, 0.2);
  }
`;

/* Input Select */

export const Select = styled.select`
  width: 100%;
  height: 30px;
  padding: 0 5px;
  border-radius: 5px;
  border: 1px solid var(--color-light);
  outline: none;
  transition: var(--transition);

  &:focus{
    background-color: rgba(0, 102, 251, 0.2);
  }
`;

/* Button */

export const Button = styled.button`
  width: 100%;
  height: 30px;
  padding: 0 5px;
  border-radius: 15px;
  border: none;
  background-color: var(--color-light);
  color: black;
  cursor: pointer;
  transition: var(--transition);

  &:hover{
    color: white;
    background-color: var(--color-dark);
  }
`;