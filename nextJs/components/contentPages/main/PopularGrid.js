import React from 'react'
import Link from 'next/link'
import styles from '../../../pages/index.module.scss'


export const PopularGrid = ({ popularItems }) => {
    return (
        <div className={styles.popularGrid}>
            {
                popularItems.map((popularItem) => (
                    <Link href="#" >
                        <a className={styles.popularGrid__item}>
                            <div className={styles.popularGrid__image}><img src={popularItem.imageLink} alt="#" /></div>
                            <p className={styles.popularGrid__title}>{popularItem.title}</p>
                            <div className={styles.popularGrid__price}>{popularItem.price}</div>
                        </a>
                    </Link>
                ))
            }
        </div>
    )
}