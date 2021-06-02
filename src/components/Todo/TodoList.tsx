import React, { useEffect, useState } from "react"
import { db } from "@/services/firestore"
import { Task } from "@/types/types"

const TodoList = () => {
  const [tasks, setTasks] = useState<Task[]>([])

  const getTasks = async (user: string) => {
    await db.collection(user).onSnapshot(querySnapshot => {
      const todos: Task[] = []
      querySnapshot.forEach(doc => {
        tasks.push({ ...doc.data(), id: doc.id } as Task)
      })
      setTasks(todos)
    })
  }

  useEffect(() => {
    const userSaved = localStorage.getItem("user")
    getTasks(userSaved as string)
    console.log("todos", tasks)
  }, [])
  return (
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
  )
}

export default TodoList
