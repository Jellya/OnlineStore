import React from 'react'
import styles from './cover.module.scss'


export const Cover = ({ title }) => {
    return (
        <div className={styles.cover}>
            <h2>{title}</h2>
        </div>
    )
}

