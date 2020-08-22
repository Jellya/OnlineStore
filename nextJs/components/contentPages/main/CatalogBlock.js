import React from 'react'
import Container from '@/components/Container'
import styles from '../../../pages/index.module.scss'
import Button from "@/components/contentPages/main/Button"
import Link from 'next/link'

const Category = ({ image:{url}, name, slug }) => {
    const imageUrl = `${
        url.startsWith('/') ? process.env.NEXT_PUBLIC_STRAPI_API_URL : ''
      }${url}`
    return (
    <Link key={slug} href={`/categories/${slug}`}>
        <a className={styles.catalogPreviewCategories__item} href="#">
            <div className={styles.catalogPreviewCategories__image}>
                <img src={imageUrl} alt={name} />
            </div>
            <p className={styles.catalogPreviewCategories__title}>{name}</p>
        </a>
    </Link>        
)}

export const CatalogBlock = ({categories = []}) => {

    return (<section className={styles.catalogPreview}>
        <Container>
            <p className={styles.hmpage__title}>catalog</p>
            <div className={styles.catalogPreviewCategories}>
                {
                    categories.length !== 0 
                    && categories.map(category => <Category {...category} />)
                }
            </div>
            <Button hreflink="/catalog" title="shop now" />
        </Container>
    </section>
    )
}