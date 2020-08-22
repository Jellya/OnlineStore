import React from 'react'
import styles from '../../../pages/index.module.scss'
import Container from '@/components/Container'
import Button from '@/components/contentPages/main/Button'




function AboutBlock() {
    return (<section className={styles.hmpageAboutUs}>
        <Container>
            <p className={styles.hmpage__title}>about us</p>
            <div className={styles.hmpageAboutUs__block}>
                <div className={styles.hmpageAboutUs__image}><img src="/hmpage__about.png" alt="#" /></div>
                <div className={styles.hmpageAboutUs__desc}>
                    <div className={styles.hmpageAboutUs__text}>
                        <p>Simple understandable styles, a minimum of details, nude shades and restrained luxury - all these are the hallmarks of the Samchuk brand.</p>
                        <p>We create feminine concise things predominantly from natural and mixed fabrics. Elegant floor dresses with a fully open back, business trousers suits for a non-trivial
                  office look, classic beige trench coats, chiffon dresses with unobtrusive floral prints - all models are sewn in limited quantities.</p>
                        <p>For the perfect wedding dress or image for a romantic date, a walk in cozy European towns or for a cocktail evening, you can safely turn to the Samchuk brand.</p>

                    </div>
                    <Button hreflink="/about-us" title="read more" />
                </div>
            </div>
        </Container>
    </section>
    )
}

export default AboutBlock