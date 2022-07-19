
//Sintaxe JSX
import { useState } from 'react'
import { Item, Container } from './styles'

function App(){ 
    const [tarefas, setTarefas] = useState([])
    const [valorQueTaDentroDoInput, setValorQueTaDentroDoInput] = useState('')

    function quandoEuDigitoNoInput(event){
        setValorQueTaDentroDoInput(event.target.value)
    }

    function quandoClicaNoBotao(){
        setTarefas([...tarefas, valorQueTaDentroDoInput])
    }


    return (
        <Container>
            <input placeholder="Digite a sua tarefa" onChange={quandoEuDigitoNoInput}/>
            <button onClick={quandoClicaNoBotao}>Adicionar Tarefa</button>

            <ul>
                {
                    tarefas.map((item, index) => (
                        <Item key={index}>{item}</Item>
                    ))
                }
            </ul>
        </Container>
    )
}

export default App