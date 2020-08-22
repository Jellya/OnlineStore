import React from 'react'
import styles from '../../../pages/index.module.scss'
import Container from '@/components/Container'



function FollowBlock() {
    return (<section className={styles.follow}>
        <Container>
            <p className={styles.hmpage__title}>instagram</p>
            <div className={styles.followBlock}>
                <div className={styles.followGrid}>
                    <a className={styles.followGrid__item} href="#"><img className={styles.followGrid__image} src="/inst1.png" alt="#" /></a>
                    <a className={styles.followGrid__item} href="#"><img className={styles.followGrid__image} src="/inst2.png" alt="#" /></a>
                    <a className={styles.followGrid__item} href="#"><img className={styles.followGrid__image} src="/inst3.png" alt="#" /></a>
                    <a className={styles.followGrid__item} href="#"><img className={styles.followGrid__image} src="/inst4.png" alt="#" /></a>
                </div>
                <a className={styles.followPreview} href="https://www.instagram.com/">
                    <div className={styles.followPreview__image}><img src="/instpr.png" alt="#" /></div>
                </a>
            </div>
        </Container>
    </section>
    )
}

export default FollowBlock