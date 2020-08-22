import React from 'react'
import Link from 'next/link'
import styles from './header.module.scss'


export const Menu = ({ linkList }) => {
  return (
    <div className={styles.headerNav__menu}>
      {
        linkList.map((linkItem) => (
          <Link key={linkItem.hrefLink} href={linkItem.hrefLink}>
            <a className={styles.headerNav__link}>{linkItem.title}</a>
          </Link>
        ))
      }
    </div>
  )
}

