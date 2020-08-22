import React from 'react'
import styles from './catalog.module.scss'


function Bottom() {
    return (
        <div className={styles.catalogBottom}>
            <div className={styles.catalogBottom__pages}>
                <div className={styles.catalogBottom__page}>1</div>
                <div className={styles.catalogBottom__page}>2</div>
                <div className={styles.catalogBottom__page}>3</div>
            </div>
            <a href="#" className={styles.catalogBottom__button}>SEE MORE</a>
            <div className={styles.catalogBottom__numbers}>Numbers:
                <div className={styles.catalogBottom__number}>30</div>
                <div className={styles.catalogBottom__number}>60</div>
                <div className={styles.catalogBottom__number}>90</div>
            </div>
        </div>
    )
}

export default Bottom