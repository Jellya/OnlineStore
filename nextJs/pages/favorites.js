import Container from '@/components/Container'
import Layout from '@/components/Layout'
import { useSelector, useDispatch } from 'react-redux'
import { addToFavorite, resetFavorite, removeFromFavorite } from '../redux/actions.js'
import { getProductForHome, getCollection } from '@/lib/api'
import styles from '@/components/common/Product/product.module.scss'
import Head from 'next/head'
import { Cover } from '@/components/common/Cover/index.js'

const FavoriteProduct = ({ id, name, image, price, removeProduct }) => {
    return (<div className={styles.productItem}>
            {image.length !==0 && image.map(({url}) => {
                const imageUrl = `${
                    url.startsWith('/') ? process.env.NEXT_PUBLIC_STRAPI_API_URL : ''
                }${url}`
                return <img className={styles.productImg} src={imageUrl} alt={name} />
            })}
            <h3 className={styles.productTitle}>{name}</h3>  
            <p className={styles.productPrice}>{price}$</p>
            <div onClick={() => removeProduct(id) } className={styles.likeFill}></div>
        <button onClick={() => removeProduct(id) } className={styles.productCart}>Delete</button>
    </div>)
}



export default function Favorites({ preview, homeProducts = [] }) {
    const dispatch = useDispatch()
    const favIds = useSelector((state) => state.favorites)
    return (
        <>
            <Head>
                <title>Favorites</title>
            </Head>

            <Layout preview={preview}>
                <Container>
                    <Cover title={"favorites"}/>
                    <div className={styles.flexItems}>
                    {
                        homeProducts.length !== 0 &&
                        homeProducts
                            .filter(product => favIds.includes(product.id))
                            .map(filteredProductProps => <FavoriteProduct {...filteredProductProps} removeProduct={(id) => dispatch(removeFromFavorite(id))} />)
                    }
                    </div>
                </Container>
            </Layout>
        </>
    )
}

export async function getStaticProps({ preview = null }) {
    const homeProducts = (await getProductForHome()) || [];
    const collections = (await getCollection()) || [];

    return {
        props: { homeProducts, preview },
    }
}