import React from 'react'
import Container from '@/components/Container'
import styles from '../../../pages/index.module.scss'
import { PopularGrid } from "@/components/contentPages/main/PopularGrid"
import Button from "@/components/contentPages/main/Button"


export const PopularBlock = ({popularItems}) => {
    return (<section className={styles.popular}>
        <Container>
            <p className={styles.hmpage__title}>popular</p>

            {/* сделать через компоненты , разделить представление и данные */}
            <PopularGrid popularItems={popularItems} />
            <Button hreflink="/catalog" title="see all" />
        </Container>
    </section>
    )
}