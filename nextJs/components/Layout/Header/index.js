import React, { useState } from 'react'
import Link from 'next/link'
import Container from '../../Container'
import styles from './header.module.scss'
import { Menu } from "./Menu"
import { Bar as HeaderBar } from "./Bar"

const LinkList = [
  {
    hrefLink: "/catalog", title: "CATALOG"
  }, {
    hrefLink: "/new", title: "NEW"
  }, {
    hrefLink: "/collections", title: "COLLECTIONS"
  }, {
    hrefLink: "/about-us", title: "ABOUT US"
  }, {
    hrefLink: "/stories", title: "STORIES"
  },
];

const LinkBar = [
  { 
    hrefLink: "/search", srcIcon: "/search.svg"
  }, {
    hrefLink: "/favorites", srcIcon: "/favorites.svg"
  }, {
    hrefLink: "/cart", srcIcon: "/basket.svg"
  },
];


const Navigation = () => {
  const [isVisibleBurgerMenu, setVisibleBurgerMenu] = useState(false);

  const onClickToggle = () => {
    setVisibleBurgerMenu(!isVisibleBurgerMenu)
  }

  return (
    <div className={styles.header}>
      <div className={styles.header__body}>
        <Link href="/">
          <a className={styles.header__logo}>SAMCHUK</a>
        </Link>
        <div className={styles.header__burger} onClick={() => onClickToggle()}>
          <span></span>
        </div>
        <nav className={styles.headerNav}>
          <Menu linkList={LinkList} />
          <HeaderBar linkBar={LinkBar} />
        </nav>

        {isVisibleBurgerMenu &&
          <nav className={styles.headerBurger}>
            <Menu linkList={LinkList} />
            <HeaderBar linkBar={LinkBar} />
          </nav>}
      </div>
    </div>
  )
}

export default function Header() {
  return (
    <Container>
      <Navigation />
    </Container>
  )
}
