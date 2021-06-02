import React, { useEffect, useState } from "react"
import { db } from "@/services/firestore"
import { Task } from "@/types/types"
import { useAuth0 } from "@auth0/auth0-react"

const TodoList = () => {
  const [tasks, setTasks] = useState<Task[]>([])
  const { user, isLoading } = useAuth0()

  const getTasks = async (user: string) => {
    try {
      db.collection(user).onSnapshot(querySnapshot => {
        const todos: Task[] = []
        querySnapshot.forEach(doc => {
          tasks.push({ ...doc.data(), id: doc.id } as Task)
        })
        setTasks(todos)
      })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getTasks(user?.nickname as string)
    console.log("todos", tasks)
  }, [user])
  return user ? (
    <div>
      <ul className="list-group">
        {tasks.map(task => {
          return (
            <li className="list-item" key={task.id}>
              {task.task}
            </li>
          )
        })}
      </ul>
    </div>
  ) : (
    <div className="text-center">Sin tareas</div>
  )
}

export default TodoList
