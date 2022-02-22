import { useEffect, useState } from "react";
import { Item } from "./types/Item";
import { items } from "./data/items";
import { filterListByMonth, getCurrentMonth } from "./helpers/dateFilter";
import { TableArea } from "./Components/TableArea";
import * as C from "./App.styles";

const App = () => {

  const [ list, setList ] = useState(items);
  const [ filteredList, setFilteredList ] = useState<Item[]>([]);
  const [ currentMonth, setCurrentMonth ] = useState(getCurrentMonth());

  // Filtagem da lista pelo mês atual

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  },[list, currentMonth]);

  // Remove item na lista comúm e filtrada

  const handleDeleteItem = ( title: string ) => {
    setList(
      list.filter((item) => item.title !== title)
    );
    setFilteredList(
      filteredList.filter((item) => item.title !== title)
    );
  }

  return(
    <C.Container>
      <C.Header>
        <C.HeaderText>Finanças Pessoais</C.HeaderText>
      </C.Header>
      <C.Body>

        {/* Tabela que compreende nossos itens */}

        <TableArea 
          list={filteredList}
          handleDeleteItem={handleDeleteItem} 
        />

      </C.Body>
    </C.Container>
  )

}

export default App;