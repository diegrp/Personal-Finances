import { formatCurrentMonth } from "../../helpers/dateFilter";
import { ResumeItem } from "../ResumeItem";

type Props = {
  currentMonth: string
  onChangeMonth: ( newMonth: string ) => void
  income: number
  expense: number
}

// Area de informações 

export const InfoArea = ( { currentMonth, onChangeMonth, income, expense }: Props ) => {

  // Função para avançar o mês em nossa filtragem

  const handlePrevMonth = () => {
    let [ year, month ] = currentMonth.split('-');
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth( currentDate.getMonth() - 1 );
    onChangeMonth(`${currentDate.getFullYear()} - ${currentDate.getMonth() + 1}`);
  }

  // Função para avançar o mês em nossa filtragem

  const handleNextMonth = () => {
    let [ year, month ] = currentMonth.split('-');
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth( currentDate.getMonth() + 1 );
    onChangeMonth(`${currentDate.getFullYear()} - ${currentDate.getMonth() + 1}`);
  }

  return(
    <C.Container>
      <C.MonthArea>
        <C.MonthArrow onClick={handlePrevMonth}>⬅️</C.MonthArrow>
        <C.MonthTitle>{formatCurrentMonth(currentMonth)}</C.MonthTitle>
        <C.MonthArrow onClick={handleNextMonth}>➡️</C.MonthArrow>
      </C.MonthArea>
      <C.ResumeArea>
        <ResumeItem title="Receitas" value={income}/>
        <ResumeItem title="Despesas" value={expense}/>
        <ResumeItem 
          title="Balanço" 
          value={income-expense}
          color={(income-expense) < 0 ? 'red':'green'}
        />
      </C.ResumeArea>
    </C.Container>
  )
}