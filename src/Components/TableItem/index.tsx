import { categories } from "../../data/categories";
import { formatDate } from "../../helpers/dateFilter";
import { Item } from "../../types/Item";

type Props = {
  item: Item
  onDelete: ( title: string ) => void
}

// Itens da tabela

export const TableItem = ( { onDelete, item }: Props ) => {
  return(
    <C.TableLine>
      <C.TableColumn>{formatDate(item.date)}</C.TableColumn>
      <C.TableColumn>
        <C.Category color={categories[item.category].color}>
          {categories[item.category].title}
        </C.Category>
      </C.TableColumn>
      <C.TableColumn>{item.title}</C.TableColumn>
      <C.TableColumn>
        <C.Value color={categories[item.category].expense ? 'red':'green'}>
         R$ {item.value}
        </C.Value>
      </C.TableColumn>
      <C.TableColumn>
        {/* Botão de delete */}
        <C.DeleteItem onClick={() => onDelete(item.title)}>X</C.DeleteItem>
      </C.TableColumn>
    </C.TableLine>
  )
}