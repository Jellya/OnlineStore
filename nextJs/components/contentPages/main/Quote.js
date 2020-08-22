import React from 'react'
import styles from '../../../pages/index.module.scss'
import Container from '@/components/Container'

function Quote({ text, author, textBold }) {
    return (
        <section className={styles.quote}>
            <Container>
                <p className={styles.quote__text}>«{text}<b>{textBold}</b>»</p>
                <p className={styles.quote__author}>{author}</p>
            </Container>
        </section>
    )
}

export default Quote