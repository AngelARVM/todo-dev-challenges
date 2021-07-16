import React from 'react'
import styles from './DeleteButton.module.css'
import garbage from './assets/white-garbage.svg'

export default function DeleteButton(props) {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <button className={styles.buttonDelete} onClick={() => props.deleteAllTodos()}>
                   <img src={garbage} alt="" /> delete all
                </button>
            </div>
        </div>
    )    
}
