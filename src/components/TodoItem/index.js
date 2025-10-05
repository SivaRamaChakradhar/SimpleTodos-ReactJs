// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoItem, deleteTodo} = props
  const {id, title} = todoItem
  const deleteItem = () => {
    deleteTodo(id)
  }

  return (
    <li className="listItems">
      <p className="title">{title}</p>
      <button onClick={deleteItem} className="btn" type="button">
        Delete
      </button>
    </li>
  )
}
export default TodoItem
