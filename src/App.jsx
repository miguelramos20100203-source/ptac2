import { useState } from "react";

function App() {
  const [ideas, setIdeas] = useState([]);
  const [newIdea, setNewIdea] = useState("");
  const [error, setError] = useState("");

  function handleAdd(event) {
    event.preventDefault();

    if (newIdea.trim() === "") {
      setError("Digite sua ideia antes de adicionar.");
      return;
    }

    const idea = {
      id: Date.now(),
      text: newIdea.trim(),
      done: false
    };

    setIdeas(current => [...current, idea]);
    setNewIdea("");
    setError("");
  }

  function handleDone(id) {
    setIdeas(current =>
      current.map(idea =>
        idea.id === id
          ? { ...idea, done: !idea.done }
          : idea
      )
    );
  }

  function handleRemove(id) {
    setIdeas(current =>
      current.filter(idea => idea.id !== id)
    );
  }

  const completed = ideas.filter(idea => idea.done).length;

  return (
    <main>
      <h1>Painel de Ideias</h1>

      <form onSubmit={handleAdd}>
        <input
          type="text"
          placeholder="Digite uma ideia"
          value={newIdea}
          onChange={(event) => {
            setNewIdea(event.target.value);
            setError("");
          }}
        />

        <button type="submit">
          Adicionar
        </button>
      </form>

      {error && <p>{error}</p>}

      <ul>
        {ideas.map(idea => (
          <li key={idea.id}>
            <input
              type="checkbox"
              checked={idea.done}
              onChange={() => handleDone(idea.id)}
            />

            <span className={idea.done ? "done" : ""}>
              {idea.text}
            </span>

            <button onClick={() => handleRemove(idea.id)}>
              ✕
            </button>
          </li>
        ))}
      </ul>

      <p>
        {`${ideas.length} ideias no painel · ${completed} concluídas`}
      </p>
    </main>
  );
}

export default App;