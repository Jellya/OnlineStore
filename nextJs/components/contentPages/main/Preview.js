import React from 'react'
import Link from 'next/link'
import styles from '../../../pages/index.module.scss'


function Preview({ title, subTitle, buttonText, hrefLink }) {
    return (<section className={styles.preview}>
        <div className={styles.preview__image}>
            <div className={styles.previewCol}>
                <h2 className={styles.previewCol__title}>{title}</h2>
                <p className={styles.previewCol__desc}>{subTitle}</p>
                <div className={styles.previewCol__button}>
                    <Link href={hrefLink}>
                        <a>{buttonText}</a>
                    </Link>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Preview