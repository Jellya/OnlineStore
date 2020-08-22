import Container from '@/components/Container'
import Layout from '@/components/Layout'
import styles from '@/components/contentPages/new/new.module.scss'
import Head from 'next/head'
import Link from 'next/link'

export default function New() {
  return (
    <Layout >
      <Head>
        <title>New</title>
      </Head>
      <section className={styles.previewNew}>
        <div className={styles.previewNew__image}>
          <div className={styles.previewNewCol}>
            <h2 className={styles.previewNewCol__title}>lookbook</h2>
            <p className={styles.previewNewCol__desc}>spring summer 2020</p>
          </div>
        </div>
      </section>
      <section className={styles.lookbook}>
        <Container>
          <div className={styles.lookbook__blockRow}>
            <div className={styles.lookbook__image}><img src="\lookbook\block1-1.png" alt="#" /></div>
            <div className={styles.lookbook__image}><img src="\lookbook\block1-2.png" alt="#" /></div>
          </div>
          <div className={styles.lookbook__blockRow}>
            <div className={styles.lookbook__blockColumn}>
              <p className={styles.lookbook__text + ' ' + styles.lookbook__textTop}>
                I named the brand by my name not by chance - this is an important part of me
          </p>
              <div className={styles.lookbook__image}><img src="\lookbook\block2-1.png" alt="#" /></div>
            </div>
            <div className={styles.lookbook__blockColumn}>
              <div className={styles.lookbook__image}><img src="\lookbook\block2-2.png" alt="#" /></div>
              <p className={styles.lookbook__text + ' ' + styles.lookbook__textBottom}>
                Over the 2 years of our brand's life, we have grown a lot, thanks to you!
          </p>
            </div>
          </div>
          <div className={styles.lookbook__block}>
            <div className={styles.lookbook__imageFull}><img src="\lookbook\block3.png" alt="#" /></div>
          </div>
          <div className={styles.lookbook__blockRow}>
            <div className={styles.lookbook__blockColumn}>
              <div className={styles.lookbook__image}><img src="\lookbook\block4-1.png" alt="#" /></div>
              <p className={styles.lookbook__text + ' ' + styles.lookbook__textBottom}>
                2020
          </p>
            </div>
            <div className={styles.lookbook__blockColumn}>
              <p className={styles.lookbook__text + ' ' + styles.lookbook__textTop}>
                alena samchuk
          </p>
              <div className={styles.lookbook__image}><img src="\lookbook\block4-2.png" alt="#" /></div>
            </div>
          </div>
          <div className={styles.lookbook__blockRow}>
            <div className={styles.lookbook__image}><img src="\lookbook\block5-1.png" alt="#" /></div>
            <div className={styles.lookbook__image}><img src="\lookbook\block5-2.png" alt="#" /></div>
          </div>
          <div className={styles.lookbook__blockRow}>
            <div className={styles.lookbook__blockColumn}>
              <p className={styles.lookbook__text + ' ' + styles.lookbook__textTop}>
                Russia
          </p>
              <div className={styles.lookbook__image}><img src="\lookbook\block6-1.png" alt="#" /></div>
            </div>
            <div className={styles.lookbook__blockColumn}>
              <div className={styles.lookbook__image}><img src="\lookbook\block6-2.png" alt="#" /></div>
              <p className={styles.lookbook__text + ' ' + styles.lookbook__textBottom}>
                moscow
          </p>
            </div>
          </div>
          <div className={styles.lookbook__block}>
            <div className={styles.lookbook__imageFull}><img src="\lookbook\block7.png" alt="#" /></div>
          </div>
          <div className={styles.catalog__button}>
            <Link href="/catalog">
              <a>see shop</a>
            </Link>
          </div>
        </Container>
      </section>
    </Layout>
  )
}