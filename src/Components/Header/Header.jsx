import React from 'react'
import styles from './Header.module.css'

export default function Header() {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>    
                <h1>#todo</h1>
            </div>
        </div>
    )
}
