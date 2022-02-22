import { Item } from "../../types/Item";

export type Props = {
  list: Item[]
  handleDeleteItem: ( title: string ) => void
}

// Tabela de items

export const TableArea = ( { list, handleDeleteItem }: Props ) => {

  return(
    <div>

    </div>
  )

}