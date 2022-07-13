
//Sintaxe JSX
import { useState } from 'react'

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
        <div>
            <input placeholder="Digite a sua tarefa" onChange={quandoEuDigitoNoInput}/>
            <button onClick={quandoClicaNoBotao}>Adicionar Tarefa</button>

            <ul>
                {
                    tarefas.map(item => (
                        <li>{item}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default App