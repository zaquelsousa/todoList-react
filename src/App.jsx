import { useState } from "react";
import './App.css';

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [feitas, setFeitas] = useState([]);
  const [excluidas, setExcluidas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState("");

  const adicionarTarefa = () => {
    if (!novaTarefa.trim()) return;
    setTarefas([...tarefas, novaTarefa]);
    setNovaTarefa("");
  };

  const marcarComoFeita = (index) => {
    const tarefa = tarefas[index];
    setFeitas([...feitas, tarefa]);
    setTarefas(tarefas.filter((_, i) => i !== index));
  };

  const excluirTarefa = (index) => {
    const tarefa = tarefas[index];
    setExcluidas([...excluidas, tarefa]);
    setTarefas(tarefas.filter((_, i) => i !== index));
  };

  return (
    <div className="mainApp">
      <h1>To-Do List</h1>
  
      <input
        type="text"
        value={novaTarefa}
        onChange={(e) => setNovaTarefa(e.target.value)}
        placeholder="Nova tarefa"
      />
      <button onClick={adicionarTarefa}>Adicionar</button>
  
      <div className="container">
        <div className="lista">
          <h2>Excluídas</h2>
          <ul>
            {excluidas.map((tarefa, index) => (
              <li key={index}>{tarefa}</li>
            ))}
          </ul>
        </div>
  
        <div className="lista">
          <h2>Pendentes</h2>
          <ul>
            {tarefas.map((tarefa, index) => (
              <li key={index}>
                {tarefa}
                <div className="taskActions">
                  <button onClick={() => marcarComoFeita(index)}>✔</button>
                  <button onClick={() => excluirTarefa(index)}>❌</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
  
        <div className="lista">
          <h2>Feitas</h2>
          <ul>
            {feitas.map((tarefa, index) => (
              <li key={index}>{tarefa}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );

}

export default App;
