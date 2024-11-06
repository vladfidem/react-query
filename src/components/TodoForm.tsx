import { FC, FormEvent, useState } from 'react'
import { useCreateTodo } from '../hooks/useTodos.ts'

export const TodoForm: FC = () => {
  const [value, setValue] = useState('')
  const createTodoMutation = useCreateTodo()

  const handleCreateTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (value.trim()) {
      createTodoMutation.mutate(value)
      setValue('')
    }
  }

  return (
    <form className="flex items-center space-x-2 mt-4 p-4" onSubmit={handleCreateTodo}>
      <img className="h-10 w-10 animate-slow-spin" src="../../public/react-query.svg" alt="logo"/>
      <input
        className="border border-gray-300 p-2 rounded-lg flex-grow focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        placeholder="Create new todo"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-colors"
        type="submit"
      >
        Create
      </button>
    </form>
  )
}
