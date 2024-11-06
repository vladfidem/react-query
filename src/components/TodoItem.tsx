import { FC } from 'react'
import { Todo } from '../models/Todo.ts'
import { useDeleteTodo, useUpdateTodo } from '../hooks/useTodos.ts'

interface Props {
  todo: Todo
}

export const TodoItem: FC<Props> = ({ todo }) => {
  const updateTodoMutation = useUpdateTodo()
  const deleteTodoMutation = useDeleteTodo()

  const handleToggle = () => updateTodoMutation.mutate({ ...todo, completed: !todo.completed })

  const handleDelete = () => deleteTodoMutation.mutate(todo.id)

  return (
    <li className="flex items-center justify-between p-2 border-b border-gray-300">
      <div className="flex items-center">
        <input
          className="mr-2 cursor-pointer"
          id={todo.id.toString()}
          type="checkbox"
          checked={todo.completed}
          onChange={handleToggle}
        />
        <label
          className={`${
            todo.completed ? 'line-through text-gray-500' : 'text-gray-800'
          } cursor-pointer`}
          htmlFor={todo.id.toString()}
        >
          {todo.title}
        </label>
      </div>
      <button
        className="text-red-500 hover:text-red-600 transition-colors ml-4"
        onClick={handleDelete}
      >
        Delete
      </button>
    </li>
  )
}
