import React from 'react'
import styles from './Tabs.module.css'



export default function Tabs(props) {
    const handleClick = (name) => {
        props.handleClick(name)
    }

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.tabs}>
                    <div 
                        className={`${styles.tab} ${props.activeTab === "All" ? styles.activeTab : null}`}
                        onClick={() => handleClick("All")}
                    >
                        All
                    </div>
                    <div 
                        className={`${styles.tab} ${props.activeTab === "Active" ? styles.activeTab : null}`}
                        onClick={() => handleClick("Active")}
                    >
                        Active
                    </div>
                    <div 
                        className={`${styles.tab} ${props.activeTab === "Completed" ? styles.activeTab : null}`}
                        onClick={() => handleClick("Completed")}
                    >
                        Completed
                    </div>
                </div>
            </div>
        </div>
    )
}
