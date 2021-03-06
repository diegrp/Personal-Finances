import { Item } from "../types/Item";

// Pega o mês atual

export const getCurrentMonth = () => {
  let now = new Date();
  return `${now.getFullYear()} - ${now.getMonth() + 1}`;
}

// Filtra itens com base no mês

export const filterListByMonth = ( list: Item[], date: string ): Item[] => {
  
  let newList: Item[] = [];

  let [ year, month ] = date.split('-');
  
  for(let i in list){
    if(list[i].date.getFullYear() === parseInt(year) && list[i].date.getMonth() + 1 === parseInt(month)){
      newList.push(list[i]);
    }
  }

  return newList;

}

// Formatação de data

export const formatDate = ( date: Date ) => {
  let day = date.getDate() + 1;
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  return `${addZeroToDate(day)}/${addZeroToDate(month)}/${year}`;
}

// Acrescenta 0 antes do número do dia e mês

const addZeroToDate = ( n: number ): string => n < 10 ? `0${n}`:`${n}`; 

// Formatação do mês

export const formatCurrentMonth = ( currentMonth: string ): string => {
  let [ year, month ] = currentMonth.split('-');

  const months = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
  return `${months[parseInt(month) - 1]} de ${year}`;
}

// Formatação do balanço de nossas receitas e despesas

export const formatBalance = ( value: number ) =>  value < 0 ? `- R$ ${Math.abs(value)}`:`R$ ${value}`;