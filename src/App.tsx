import { useEffect, useState } from "react";
import { Item } from "./types/Item";
import { items } from "./data/items";
import { filterListByMonth, getCurrentMonth } from "./helpers/dateFilter";

const App = () => {

  const [ list, setList ] = useState(items);
  const [ filteredList, setFilteredList ] = useState<Item[]>([]);
  const [ currentMonth, setCurrentMonth ] = useState(getCurrentMonth());

  // Filtagem da lista pelo mês atual

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  },[list, currentMonth]);

  return(
    <div></div>
  )
}

export default App;