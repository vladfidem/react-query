import axios from 'axios'
import { Todo } from '../models/Todo.ts'

const API_URL = 'http://localhost:3001/todos'

export const fetchTodos = async () => {
  const { data } = await axios.get<Todo[]>(API_URL)
  return data
}

export const createTodo = async (title: string) => {
  const { data } = await axios.post<Todo>(API_URL, { title, completed: false })
  return data
}

export const updateTodo = async (todo: Todo) => {
  const { data } = await axios.put<Todo>(`${API_URL}/${todo.id}`, todo)
  return data
}

export const deleteTodo = async (id: number) => {
  await axios.delete<Todo>(`${API_URL}/${id}`)
}
