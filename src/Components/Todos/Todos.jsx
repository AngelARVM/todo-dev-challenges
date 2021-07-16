import React,{useState, useEffect} from 'react'
import Todo from '../Todo/Todo'
import styles from './Todos.module.css'

export default function Todos(props) {
    const [currentTodos, setCurrentTodos] = useState(props.todos)
    const [tab, setTab] = useState("All")
    useEffect(()=> {
        if (tab === "All"){
            setCurrentTodos(props.todos)
        } if (tab === "Active"){
            setCurrentTodos(props.todos.filter(todo => todo.completed === false))
        } else if (tab === "Completed"){
            setCurrentTodos(props.todos.filter(todo => todo.completed === true))
        }

    }, [tab, props?.todos])

    useEffect(() => {
        setTab(props?.activeTab)
    }, [props?.activeTab])


   

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                {currentTodos?.map((todo) => (
                    <Todo 
                        todo={todo} 
                        key={todo.id} 
                        tab={tab}
                        completeTodo={() => props.completeTodo(todo.id)} 
                        deleteTodo={() => props.deleteTodo(todo.id)}
                    />
                ))}
            </div>
        </div>
    )
}
