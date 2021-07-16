import React, {useState} from 'react'
import styles from './TodoInput.module.css'

export default function TodoInput(props) {
    const [input, setInput] = useState("")

    const handleChange = (event) => {
        setInput(event.target.value)
    }

    const handleClick = () => {
        if (input){
            const todo = {
                detail: input,
                completed: false,
                id: Math.random().toFixed(14)*(10**14)
            }
            props.addTodo(todo)
    
            setInput("")
        }
    }

    const addWithEnter = (event) => {
        if (event.key === 'Enter'){
            handleClick()
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.add}>
                    <input type="text" onKeyPress={addWithEnter} onChange={handleChange} value={input} placeholder="add details"/>
                    <input type="button" onClick={handleClick} value="Add" />
                </div>
            </div>
        </div>
    )
}
