import styled from "styled-components";

/* Minha tabela de itens */

export const Table = styled.table`
  width: 100%;
  background-color: #fff;
  padding: var(--size-padding);
  border-radius: var(--size-radius);
  box-shadow: 3px 3px 15px 5px #ccc;
  margin-top: var(--size-margin);
  border-collapse: collapse;
`;

/* Título de descrição de cada item */

export const TableHeadColumn = styled.th<{ width?: number }>`
  width: ${props => props.width ? `${props.width}px`:'auto'};
  padding: 10px 0;
  text-align: center;
`