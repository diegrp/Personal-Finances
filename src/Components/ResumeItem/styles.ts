import styled from "styled-components";

export const Container = styled.div`
  flex: 2;
`;

/* Receitas, despesas e balanço dos meus items */

// Título

export const Title = styled.div`
  font-weight: bold;
  text-align: center;
  color: #888;
  margin-bottom: 5px;
`;

// Valor

export const Info = styled.div<{ color?: string }>`
  font-weight: bold;
  text-align: center;
  color: ${props => props.color ??'#000'};
`;