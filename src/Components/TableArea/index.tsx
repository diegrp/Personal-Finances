import { Item } from "../../types/Item";
import { TableItem } from "../TableItem";

export type Props = {
  list: Item[]
  handleDeleteItem: ( title: string ) => void
}

// Tabela de items

export const TableArea = ( { list, handleDeleteItem }: Props ) => {

  return(
    <C.Table>
      <thead>
        {/* Título dos itens */}
        <tr>
          <C.TableHeadColumn width={100}>Data</C.TableHeadColumn>  
          <C.TableHeadColumn width={100}>Categoria</C.TableHeadColumn>  
          <C.TableHeadColumn width={630}>Descrição</C.TableHeadColumn>  
          <C.TableHeadColumn width={100}>Valor</C.TableHeadColumn> 
        </tr>
      </thead>
      <tbody>
        {/* Map dos nossos itens filtrados */}
        {list.map((item, index) => (
          <TableItem 
            key={index} 
            item={item}
            onDelete={handleDeleteItem} 
          />
        ))}
      </tbody>
    </C.Table>
  )

}