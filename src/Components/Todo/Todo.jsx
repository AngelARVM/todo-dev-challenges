import React, {useState, useEffect} from 'react'
import styles from './Todo.module.css'
import check from './assets/checked.svg'
import garbage from './assets/garbage.svg'

export default function Todo(props) {
    const [checked, setChecked] = useState(props.todo.completed)
    
    const handleClick = () => {
        setChecked(!checked)
        props.completeTodo()
    }

    useEffect(() => {
        setChecked(props?.todo?.completed)
    }, [props?.todo?.completed])
    
    return (
        <div className={styles.container}>
            <div  className={`${styles.todo} ${checked ? styles.checked : null}`} onClick={handleClick}>
                <div className={`${styles.checkbox} `}>
                    {checked ? <img src={check} alt={""} /> : null}
                </div>
                <p>{props.todo?.detail}</p>
            </div>
            { props.tab === "Completed" ? 
                <div className={styles.delete} onClick={props.deleteTodo}>
                    <img src={garbage} alt="delete"/>
                </div> 
            : null}
        </div>
    )
}
