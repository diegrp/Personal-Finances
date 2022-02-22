type Props = {
  currentMonth: string
  onChangeMonth: ( newMonth: string ) => void
  income: number
  expense: number
}

// Area de informações 

export const InfoArea = ( { currentMonth, onChangeMonth, income, expense }: Props ) => {

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