import Container from '@/components/Container'
import Layout from '@/components/Layout'
import Head from 'next/head'
import styles from '@/components/contentPages/catalog/catalog.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, addToFavorite, removeFromFavorite } from '../redux/actions.js'
import { Cover } from '@/components/common/Cover'
import Product from '@/components/common/Product'
import { getProductForHome, getCollection, getCategories } from '@/lib/api'
import Bottom from '@/components/contentPages/catalog/Bottom.js'
import Bar from '@/components/contentPages/catalog/Bar.js'



export default function Catalog({ homeProducts, preview, collections, categories }) {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const favorites = useSelector(state => state.favorites)
  const filters= useSelector(state => state.filters);
  return (
    <>
      <Head>
        <title>Каталог</title>
      </Head>

      <Layout>
        <Container>
          <Cover title={"catalog"} />
          <Bar />
          <div className={styles.products}>
            {
              homeProducts.length > 0
              && homeProducts
              .filter(product => product.price > filters.price.min && product.price < filters.price.max)
              .map(itemproduct => (
                <Product {...itemproduct}
                  cart={cart}
                  favorites={favorites}
                  addToCart={(id) => dispatch(addToCart(id))}
                  addToFavorite={(id) => dispatch(addToFavorite(id))}
                  removeFromFavorite={(id) => dispatch(removeFromFavorite(id))}
                />))
            }
          </div>
          <Bottom />
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = null }) {
  const homeProducts = (await getProductForHome({ limit: 5 })) || [];
  const collections = (await getCollection()) || [];
  const categories = (await getCategories()) || [];

  return {
    props: { homeProducts, preview, collections, categories },
  }
}

