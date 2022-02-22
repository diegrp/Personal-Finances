import { formatBalance } from "../../helpers/dateFilter";
import * as C from "./styles";

type Props = {
  title: string
  value: number
  color?: string
}

// Receitas, despesas e balanço dos valores de nossos itens

export const ResumeItem = ( { title, value, color }: Props ) => {
  return(
    <C.Container>
      <C.Title>{title}</C.Title>
      <C.Info color={color}>{formatBalance(value)}</C.Info>
    </C.Container>
  )
}