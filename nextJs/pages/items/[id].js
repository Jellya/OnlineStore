
import { useRouter } from "next/router"
import { getProductForHome, getProductWithId } from '@/lib/api'
import Container from '@/components/Container'
import Layout from '@/components/Layout'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, addToFavorite, removeFromFavorite } from '../../redux/actions.js'
import styles from '@/components/common/Product/product.module.scss'

const PageProduct = ({ id, name, description, price, image, addToCart, addToFavorite, removeFromFavorite, cart = [], favorites = [] }) => {
    const isAddingToCart = cart.includes(id);
    const isAddingToFav = favorites.includes(id);
    return (<div className={styles.productPageItem}>
        {image.length !== 0 && image.map(({ url }) => {
            const imageUrl = `${
                url.startsWith('/') ? process.env.NEXT_PUBLIC_STRAPI_API_URL : ''
                }${url}`
            return <img className={styles.productPageImg} src={imageUrl} alt={name} />
        })}
        <div className={styles.productPageAbout}>
            <h3 className={styles.productPageTitle}>{name}</h3>
            <p className={styles.productPageDesc}>{description}</p>
            <p className={styles.productPagePrice}>{price}$</p>
            {isAddingToCart
                ? <div>Added to cart</div>
                : <button onClick={() => addToCart(id)} className={styles.productPageCart}>Buy</button>
            }
            {isAddingToFav
                ? <div onClick={() => removeFromFavorite(id)} className={styles.productPagelikeFill}></div>
                : <div onClick={() => addToFavorite(id)} className={styles.productPagelike}></div>
            }
        </div>
    </div>)
}


export default function Item({ allProducts }) {

    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const favorites = useSelector((state) => state.favorites)

    return (
        <Layout>
            <Container>
                {
                    allProducts.length > 0
                    && allProducts
                        .map(itemproduct => (
                            <PageProduct {...itemproduct}
                                cart={cart}
                                favorites={favorites}
                                addToCart={(id) => dispatch(addToCart(id))}
                                addToFavorite={(id) => dispatch(addToFavorite(id))}
                                removeFromFavorite={(id) => dispatch(removeFromFavorite(id))}
                            />))
                }
            </Container>
        </Layout>

    )
}

export async function getStaticProps({ params }) {
    const allProducts = (await getProductForHome(params.id)) || [];
    return {
        props: { allProducts }
    }
}

export async function getStaticPaths() {
    const items = (await getProductForHome()) || [];
    return {
        paths: items?.map((item) => `/items/${item.id}`) || [],
        fallback: true,
    }
}