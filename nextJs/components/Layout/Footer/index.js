import React from 'react'
import Link from 'next/link'
import Container from '../../Container'
import styles from './footer.module.scss'
import { EXAMPLE_PATH } from '@/lib/constants'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <Container>
                <div className={styles.footerTop}>
                    <div className={styles.footerDiscount}>
                        <p className={styles.footer__title}>
                            Sign up for our newsletter and get a 10% discount
                    </p>
                        <form className={styles.footer__email}>
                            <input type="text" name="email" placeholder="E-mail" className={styles.form__text} />
                            <input type="submit" name="button" value="" className={styles.form__button} />
                        </form>
                    </div>
                    <div className={styles.footerSocial}>
                        <p className={styles.footer__title}> Our social media</p>
                        <div className={styles.footerSocial__items}>
                            <a href="https://www.facebook.com/" className={styles.footerSocial__item}>
                                <img src="/facebook.svg" alt="#" />
                            </a>
                            <a href="https://twitter.com/" className={styles.footerSocial__item}>
                                <img src="/twitter.svg" alt="#" />
                            </a>
                            <a href="https://www.youtube.com/channel/UCqL1NR3GiEE0Q_R44PIAbbg" className={styles.footerSocial__item}>
                                <img src="/youtube.svg" alt="#" />
                            </a>
                            <a href="https://www.instagram.com/samchuk.me/" className={styles.footerSocial__item}>
                                <img src="/instagram.svg" alt="#" />
                            </a>
                            <a href="https://vk.com/" className={styles.footerSocial__item}>
                                <img src="/vk.svg" alt="#" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className={styles.footerNav}>
                    <div className={styles.footerNav__column}>
                        <ul className={styles.footer__title}>Catalog</ul>
                        <li className={styles.footerNav__item}><a href="#">Freedom Collection</a></li>
                        <li className={styles.footerNav__item}><a href="#">Source Collection</a></li>
                        <li className={styles.footerNav__item}><a href="#">SALE</a></li>
                        <li className={styles.footerNav__item}><a href="#">All items</a></li>
                    </div>
                    <div className={styles.footerNav__column}>
                        <ul className={styles.footer__title}>Help</ul>
                        <li className={styles.footerNav__item}><a href="#">Delivery</a></li>
                        <li className={styles.footerNav__item}><a href="#">Payment</a></li>
                        <li className={styles.footerNav__item}><a href="#">Refund</a></li>
                        <li className={styles.footerNav__item}><a href="#">FAQ</a></li>
                        <li className={styles.footerNav__item}><a href="#">Contact us</a></li>
                        <li className={styles.footerNav__item}><a href="#">Track your order</a></li>
                    </div>
                    <div className={styles.footerNav__column}>
                        <ul className={styles.footer__title}>Legal documentation</ul>
                        <li className={styles.footerNav__item}><a href="#">Terms of Use</a></li>
                        <li className={styles.footerNav__item}><a href="#">Terms of Sale</a></li>
                        <li className={styles.footerNav__item}><a href="#">Cookie Policy</a></li>
                    </div>

                </div>
                <div className={styles.footerBottom}>
                    <div className={styles.footerBottom__info}>
                        <div className={styles.footerBottom__copyr}>
                            © SAMCHUK 2020. Russia, Moscow. All rights reserved
                    </div>
                        <div className={styles.footerBottom__privacy}>
                            Privacy Police
                    </div>
                    </div>
                </div>
            </Container>
        </footer>
    )
}
