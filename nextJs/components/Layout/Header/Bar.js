import React from 'react'
import Link from 'next/link'
import styles from './header.module.scss'
import { useSelector, useDispatch } from 'react-redux'



export const Bar = ({ linkBar }) => {
  const cartCount = useSelector((state) => state.cart) || []
  return (
    <div className={styles.headerNavBar}>
      {
        linkBar.map((linkItem) => (
          <Link key={linkItem.hrefLink} href={linkItem.hrefLink}>
            <a className={styles.headerNavBar__item}><img src={linkItem.srcIcon} /></a>
          </Link>))
      }
      <div>{`${cartCount.length}`}</div>
    </div>
  )
}