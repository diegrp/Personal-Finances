import { Item } from "../../types/Item";

type Props = {
  item: Item
  onDelete: ( title: string ) => void
}

// Itens da tabela

export const TableItem = ( { onDelete, item }: Props ) => {
  return(
    <div></div>
  )
}