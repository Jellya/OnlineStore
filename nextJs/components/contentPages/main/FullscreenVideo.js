import React from 'react'
import styles from '../../../pages/index.module.scss'

export const FullscreenVideo = ({ srcVideo }) => {
    return (
        <section className={styles.presentation}>
            <iframe className={styles.presentation__video} src={srcVideo} frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </section>
    )
}