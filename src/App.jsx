
//Sintaxe JSX
import { useState } from 'react'
import { Item, Container, TodoList, Input, Button, List } from './styles'

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
            <TodoList>
                <Input placeholder="Digite a sua tarefa" onChange={quandoEuDigitoNoInput}/>
                <Button onClick={quandoClicaNoBotao}>Adicionar Tarefa</Button>

                <List>
                    {
                        tarefas.map((item, index) => (
                            <Item key={index}>{item}</Item>
                        ))
                    }
                </List>
            </TodoList>
        </Container>
    )
}

export default App