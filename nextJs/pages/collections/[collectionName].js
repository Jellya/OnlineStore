
import Head from 'next/head'
import { getProductForHome, getCollection, getProductByCollection } from '@/lib/api'
import Container from '@/components/Container'
import Layout from '@/components/Layout'
import Product from '@/components/common/Product'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, addToFavorite, removeFromFavorite } from '../../redux/actions.js'
import styles from '@/components/contentPages/catalog/catalog.module.scss'


export default function CollectionProducts({productsByCollection }) {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart)
    const favorites = useSelector(state => state.favorites)
    const filters= useSelector(state => state.filters);
    return (
      <>
        <Layout>
          <Head>
            <title>Collections</title>
          </Head>
          <Container>
          {collections.length !== 0 && collections.map(itemCollection => {
            // TODO вынести в отдельный компонент
            return <div>{itemCollection.name}</div>
          })}
            <div className={styles.products}>
            {
              productsByCollection.length !==0 && 
              productsByCollection.map(product => (
              <Product {...product}
                cart={cart}
                addToCart={(id) => dispatch(addToCart(id))}
                favorites={favorites}
                addToFavorite={(id) => dispatch(addToFavorite(id))}
                removeFromFavorite={(id) => dispatch(removeFromFavorite(id))}
              />))
            }
            </div>
          </Container>
        </Layout>
      </>
    )
  }

export async function getStaticProps({params}) {
    const productsByCollection = await getProductByCollection(params.collectionName)
    return {
        props: { productsByCollection }
    }
}

export async function getStaticPaths() {
    const collections = (await getCollection()) || [];
    return {
        paths: collections?.map((collection) => `/collections/${collection.name}`) || [],
        fallback: true,
    }
}