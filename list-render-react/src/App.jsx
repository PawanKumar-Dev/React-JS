import './App.css'

function App() {
  const todos = [
    {
      title: "First title",
      desc: "Just first random description"
    },
    {
      title: "Second title",
      desc: "Just second random description"
    },
    {
      title: "Third title",
      desc: "Just third random description"
    },
  ]

  const List = todos.map((todo, index) => (
    <li key={index}>
      <h3>{todo.title}</h3>
      <p>{todo.desc}</p>
    </li>
  ));

  return (
    <>
      <ul>
        {List}
      </ul>
    </>
  )
}
export default App