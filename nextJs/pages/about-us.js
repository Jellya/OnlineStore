import Container from '@/components/Container'
import Layout from '@/components/Layout'
import Head from 'next/head'
import styles from '@/components/contentPages/aboutus/aboutus.module.scss'

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>About Us</title>
      </Head>

      <Layout>
        <section className={styles.previewAbout}>
          <div className={styles.previewAbout__image}>
            <div className={styles.previewAboutCol}>
              <h2 className={styles.previewAboutCol__title}>about our company</h2>
              <p className={styles.previewAboutCol__desc}>Russia, Moscow</p>
            </div>
          </div>
        </section>
        <Container>
          <section className={styles.aboutus}>
            <div className={styles.aboutus__block}>
              <p className={styles.aboutus__subtitle}>about me</p>
              <div className={styles.aboutusRow}>
                <div className={styles.aboutus__image}><img src="\aboutus\block1.png" alt="#" /></div>
                <div className={styles.aboutus__text}>
                  <p>
                    My name is Alena, I am the founder and designer of the brand "Alena Samchuk".
            </p>
                  <p>
                    Our story began in 2015, when I relized that crating clothes is no longer just a hobby for me, because I
                    thought about it for days and nights(however, as now).
            </p>
                  <p>
                    I myself am able to perfectly design, tailor, sew, and I think that it is important, because it helps me
                    to control the process of creating our clothes at all its stages much better.
            </p>
                </div>
              </div>
            </div>
            <div className={styles.aboutus__block}>
              <p className={styles.aboutus__subtitle + ' ' + styles.aboutus__subtitleRight}>about our clothes</p>
              <div className={styles.aboutusColumn}>
                <div className={styles.aboutusRow}>
                  <div className={styles.aboutus__text}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto totam reprehenderit explicabo
                    accusantium blanditiis nemo quidem quasi id eveniet perferendis quam, rem unde! Vero, nihil sunt. Libero
                    ratione a, dolor eum culpa expedita sunt repellat quas delectus doloremque quos ut vitae nostrum minima
                labore quae soluta? Dolor voluptatum minima perferendis.</p>
                  </div>
                  <div className={styles.aboutus__image}><img src="\aboutus\block2-1.png" alt="#" /></div>
                </div>
                <div className={styles.aboutusRow}>
                  <div className={styles.aboutus__image}><img src="\aboutus\block2-2.png" alt="#" /></div>
                  <div className={styles.aboutus__text}>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias blanditiis, officiis tempora sit atque
                    quis nulla nihil, laboriosam architecto a repellendus dolor assumenda! Accusantium perferendis, quo ad
                    quas voluptas dolorem laudantium porro iure, veniam, magni rerum. Blanditiis quas, quibusdam nihil ipsam
                    maiores, fugit non, quos consequatur optio quisquam necessitatibus reprehenderit quia? Sequi, quisquam
                    magnam quia quaerat adipisci nostrum officia fugiat deleniti, inventore tempore unde eveniet itaque
              deserunt asperiores quo nobis!</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.aboutus__block}>
              <div className={styles.aboutusQuote}>
                <p className={styles.aboutusQuote__text}>­­«<b>All things are sewn in only a few copies</b> - it is important for us that
        every girl can feel special.»</p>
                <p className={styles.aboutusQuote__author}>alena samchuk</p>
              </div>
            </div>
            <div className={styles.presentation}>
              <iframe className={styles.presentation__video} src="https://www.youtube.com/embed/jLA_Zlfc4g4" frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className={styles.catalog__button}><a href="/catalog">see our catalog</a></div>
          </section>
        </Container>
      </Layout>
    </>
  )
}
