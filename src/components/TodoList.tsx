import { FC, useState } from 'react'
import { useTodos } from '../hooks/useTodos.ts'
import { TodoItem } from './TodoItem.tsx'
import { Loading } from './ui/Loading.tsx'
import { Error } from './ui/Error.tsx'

export const TodoList: FC = () => {
  const { data: todos = [], isLoading, error } = useTodos()
  const [filter, setFilter] = useState<'all' | 'open' | 'completed'>('all')

  if (isLoading) return <Loading/>
  if (error) return <Error error={error} />

  const filteredTodos = todos.filter(todo => {
    if (filter === 'open') return !todo.completed
    if (filter === 'completed') return todo.completed
    return true
  })

  const renderFilterButtons = () => (
    <div className="flex justify-center mb-4 space-x-2">
      <button
        className={`px-3 py-1 rounded-lg ${filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        onClick={() => setFilter('all')}
      >
        All
      </button>
      <button
        className={`px-3 py-1 rounded-lg ${filter === 'open' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        onClick={() => setFilter('open')}
      >
        Open
      </button>
      <button
        className={`px-3 py-1 rounded-lg ${filter === 'completed' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        onClick={() => setFilter('completed')}
      >
        Completed
      </button>
    </div>
  )

  return (
    <div className="p-4">
      {todos.length > 0 && renderFilterButtons()}
      <ul className="list-none">
        {filteredTodos.map(todo => <TodoItem key={todo.id} todo={todo}/>)}
      </ul>
    </div>
  )
}
