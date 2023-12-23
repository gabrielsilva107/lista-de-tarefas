import React, {useState} from "react";
import './Todolist.css';
import icone from './assets/icone.png'

function TodoList(){

    const[lista, setlist] = useState([]);
    const[novoItem, setNovoItem] = useState("");

    function adicionarItem(form){
        form.preventDefault();
        if (!novoItem){
            return;
        }
        setlist([...lista, {text: novoItem, iscomplete: false}])
        setNovoItem("");
        document.getElementById('input-entrada').focus();
    }

    return(
        <div>
            <h1>Lista de Tarefas</h1>
            <form onSubmit={adicionarItem}>
                <input 
                    id="input-entrada" 
                    type="text" 
                    value={novoItem}
                    onChange={(e) => { setNovoItem(e.target.value)}}
                    placeholder="Adicione uma tarefa"
                />
                <button className="add" type="submit">Add</button>
            </form>
            <div className="listaTarefas">
                <div style={{textAlign:'center'}}>
                    {
                    lista.length <1
                        ?
                        <img className="icone-central" src={icone}/>
                        :
                        lista.map((item, index)=>(
                            <div 
                                className={item.iscomplete ? "item completo": "item"}>
                                <span onClick={()=>{clicou(index)}}>{item.text} </span>
                                <button className="del">Deletar</button>
                        </div>
                        ))
                    }
                    <div className="item">
                        <span>Tarefa de exemplos </span>
                        <button className="del">Deletar</button>
                    </div>
                <button className="deleteAll">Deletar tudo</button>
                </div>
            </div>
        </div>
    )
}

export default TodoList