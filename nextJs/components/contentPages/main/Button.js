import React from 'react'
import Link from 'next/link'
import styles from '../../../pages/index.module.scss'


function Button({ hreflink, title }) {
    return (
        <div className={styles.hmpage__button}>
            {
                <Link href={hreflink}>
                    <a>{title}</a>
                </Link>
            }
        </div>
    )
}

export default Button