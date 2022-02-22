import styled from "styled-components";

/* Container que compreende o mês, receitas, despesas e balanço */

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: var(--size-padding);
  border-radius: var(--size-radius);
  box-shadow: 0 3px 5px #ccc;
  margin-top: -40px;
`;

/* Área do mês */

export const MonthArea = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

/* Seta de avanço e retorno do mês */

export const MonthArrow = styled.div`
  width: 40px;
  text-align: center;
  font-size: 25px;
  user-select: none;
  cursor: pointer;
`;

/* Descrição do mês */

export const MonthTitle = styled.div`
  flex: 1;
  text-align: center;
`;

/* Área de receitas, despesas e balanço */

export const ResumeArea = styled.div`
  flex: 2;
  display: flex;
`;