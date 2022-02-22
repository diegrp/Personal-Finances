import { useState } from "react"
import { categories } from "../../data/categories";
import { Item } from "../../types/Item";
import * as C from "./styles";

type Props = {
  onAdd: ( item: Item ) => void
  onChangeMonth: ( newMonth: string ) => void
}

// Área de registro para novos itens em nossa lista

export const InputArea = ( { onAdd, onChangeMonth }: Props ) => {

  const [ dateField, setDateField ] = useState('');
  const [ categoryField, setCategoryField ] = useState('');
  const [ titleField, setTitleField ] = useState('');
  const [ valueField, setValueField ] = useState(0);

  // Pega as chaves do objeto de categorias

  const categoryKeys: string[] = Object.keys(categories);

  // Função que formaliza e verifica os erros para adicionar os itens na lista

  const handleAddEvent = () => {
    
    let errors: string[] = [];

    if(isNaN(new Date(dateField).getTime())){
      errors.push('Data Inválida');
    }
    if(!categoryKeys.includes(categoryField)){
      errors.push('Categoria Inválida');
    }
    if(titleField === ''){
      errors.push('Título Vázio');
    }
    if(valueField <= 0){
      errors.push('Valor Inválido');
    }

    if(errors.length > 0){
      alert(errors.join('\n'));
    }else{
      onAdd({
        date: new Date(dateField),
        category: categoryField,
        title: titleField,
        value: valueField
      });
      onChangeMonth(dateField);
      clearField();
    }
  }

  // Limpa os estados se não tiver nenhum erro, após adicionar na lista

  const clearField = () => {
    setDateField('');
    setCategoryField('');
    setTitleField('');
    setValueField(0);
  }

  return(
    <C.Container>
      <C.InputLabel>
        <C.InputText>
          <C.Input type="date" value={dateField} onChange={({target}) => setDateField(target.value)} />
        </C.InputText>
      </C.InputLabel>
      <C.InputLabel>
        <C.InputText>
          <C.Select value={categoryField} onChange={({target}) => setCategoryField(target.value)}>
            <option hidden>Selecione</option>
            {categoryKeys.map((key, index) => (
              <option key={index} value={key}>{categories[key].title}</option>
            ))}
          </C.Select>
        </C.InputText>
      </C.InputLabel>
      <C.InputLabel>
        <C.InputText>
          <C.Input type="text" value={titleField} onChange={({target}) => setTitleField(target.value)} />
        </C.InputText>
      </C.InputLabel>
      <C.InputLabel>
        <C.InputText>
          <C.Input type="number" value={valueField} onChange={({target}) => setValueField(parseFloat(target.value))} />
        </C.InputText>
      </C.InputLabel>
      <C.InputLabel>
        <C.InputText>
          <C.Button onClick={handleAddEvent}>
            Adicionar
          </C.Button>
        </C.InputText>
      </C.InputLabel>
    </C.Container>
  )

}