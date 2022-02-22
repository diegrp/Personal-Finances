import styled from "styled-components";

/* Row da tabela que compreende os itens */

export const TableLine = styled.tr`
  background-color: #ccc;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 5px #ccc;
  margin-top: -40px;
`;

export const TableColumn = styled.td`
  padding: 10px 0;
  text-align: center;
`;

/* Categoria do item */

export const Category = styled.div<{ color: string }>`
  display: inline-block;
  text-align: center;
  padding: 10px;
  border-radius: 5px;
  color: #fff;
  background-color: ${props => props.color};
`;

/* Valor do item */

export const Value = styled.div<{ color: string }>`
  color: ${props => props.color};
`;

/* Botão para remover o item */

export const DeleteItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  width: 30px;
  height: 30px;
  background-color: rgba(0, 102, 251, 0.3);
  border-radius: 50%;
  transition: 0.2s linear;
  cursor: pointer;

  &:hover{
    background-color: rgba(0, 102, 251, 1);
    color: white;
  }
`;